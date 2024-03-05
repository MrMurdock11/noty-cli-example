import { Args, Flags, ux } from "@oclif/core";

import BaseCommand from "../../common/base.command";
import { addNote } from "../../services/storage";

export default class NotesCreate extends BaseCommand {
  static aliases = ["create", "new"];

  static args = {
    title: Args.string({ description: "Title of the note" }),
  };

  static description = "Create a new note.";

  static examples = [
    "<%= config.bin %> <%= command.id %> 'Grocery List' --content 'Milk, Eggs, Bread, Coke, Onion'",
  ];

  static flags = {
    content: Flags.string({
      char: "c",
      description: "Content of the note",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(NotesCreate);

    if (!args.title) {
      args.title = await ux.prompt(ux.colorize("blue", "Enter note title"), {
        required: true,
      });
    }

    if (!flags.content) {
      flags.content = await ux.prompt(
        ux.colorize("blue", "Enter note content"),
        { required: true }
      );
    }

    const addNoteResult = await addNote(args.title, flags.content);
    if (addNoteResult.isFailure) {
      console.log(addNoteResult.error);
      return;
    }

    this.log(ux.colorize("green", "Note created successfully."));
  }
}
