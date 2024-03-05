declare type NoteModel = [date: string, text: string];

declare type NotesModel = Record<string, NoteModel>;

declare type StorageModel = {
  notes?: NotesModel;
};
