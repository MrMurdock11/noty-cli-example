import * as toml from "@iarna/toml";
import { Config } from "@oclif/core";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { Result, fail, ok } from "../common/result";
import { AppMessages } from "./app-messages";

const STORAGE_NAME = "_s.toml";

const DEFAULT_STORAGE: StorageModel = {
  notes: undefined,
};

const getStoragePath = async (): Promise<string> => {
  const config = await Config.load(__dirname);

  return join(config.dataDir, STORAGE_NAME);
};

const init = async (): Promise<StorageModel> => saveStorage(DEFAULT_STORAGE);

const getStorage = async (): Promise<StorageModel> => {
  const storagePath = await getStoragePath();
  if (!existsSync(storagePath)) {
    return init();
  }

  const fileBuffer = await readFile(storagePath);

  return toml.parse(fileBuffer.toString());
};

const saveStorage = async (storage: StorageModel): Promise<StorageModel> => {
  const storagePath = await getStoragePath();
  await writeFile(storagePath, toml.stringify(storage), "utf8");

  return storage;
};

export const getNotes = async (): Promise<Result<NotesModel, string>> => {
  const storage = await getStorage();

  if (!storage.notes) {
    return fail(AppMessages.EMPTY_NOTES);
  }

  return ok(storage.notes);
};

export const getNote = async (
  title: string
): Promise<Result<NoteModel, string>> => {
  const storage = await getStorage();

  if (!storage.notes) {
    return fail(AppMessages.EMPTY_NOTES);
  }

  const note = storage.notes[title];

  return ok(note);
};

export const addNote = async (
  title: string,
  text: string
): Promise<Result<void, string>> => {
  const storage = await getStorage();

  if (!storage.notes) {
    return fail(AppMessages.EMPTY_NOTES);
  }

  if (title in storage.notes) {
    return fail(`Note '${title}' already exists.`);
  }

  storage.notes[title] = [new Date().toISOString(), text];

  saveStorage(storage);
  return ok();
};

export const removeNote = async (
  title: string
): Promise<Result<void, string>> => {
  const storage = await getStorage();

  if (!storage.notes) {
    return fail(AppMessages.EMPTY_NOTES);
  }

  delete storage.notes![title];

  saveStorage(storage);
  return ok();
};
