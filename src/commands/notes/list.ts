/* eslint-disable perfectionist/sort-objects */
import { Flags, ux } from "@oclif/core";

import BaseCommand from "../../common/base.command";
import { formatDate } from "../../common/utils";
import { getNotes } from "../../services/storage";

export default class NotesList extends BaseCommand {
  static aliases = ["list"];

  static description = "List saved notes.";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    table: Flags.boolean({
      char: "t",
      default: false,
      description: "Show notes in a table format",
    }),
  };

  private readonly _contentMaxLength = 25;

  public async run(): Promise<void> {
    const { flags } = await this.parse(NotesList);
    const getNotesResult = await getNotes();

    if (getNotesResult.isFailure) {
      console.log(getNotesResult.error);
      return;
    }

    const notes = getNotesResult.value;

    if (flags.table) {
      this.displayNotesAsTable(notes);
    } else {
      this.displayNotesAsList(notes);
    }
  }

  private displayNotesAsList(notes: NotesModel): void {
    console.log("Notes Lists\n───────────");

    const notesList = Object.entries(notes)
      .map(
        ([title, [date, content]], index) =>
          `${ux.colorize("green", `${index + 1}. ${title}`)} - ${formatDate(
            date
          )}\n   ${ux.colorize(
            "blue",
            this.truncate(content, this._contentMaxLength)
          )}`
      )
      .join("\n");

    console.log(notesList);
  }

  private displayNotesAsTable(notes: NotesModel): void {
    const mappedNotes = Object.entries(notes).map(
      ([title, [date, content]], index) => ({
        content,
        date: formatDate(date),
        index: index + 1,
        title,
      })
    );

    ux.table(mappedNotes, {
      index: {
        get: (row) => ux.colorize("green", row.index.toString()),
        header: "*",
        minWidth: 3,
      },
      title: {
        minWidth: 7,
        get: (row) => ux.colorize("green", row.title),
      },
      content: {
        minWidth: 7,
        get: (row) => ux.colorize("blue", row.content),
      },
      date: {
        header: "Created",
        get: (row) => formatDate(row.date),
      },
    });
  }

  private truncate(str: string, limit: number): string {
    return str.length > limit ? str.slice(0, limit) + "..." : str;
  }
}
