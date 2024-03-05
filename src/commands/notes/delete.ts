import { Args, ux } from "@oclif/core";

import BaseCommand from "../../common/base.command";
import { removeNote } from "../../services/storage";

export default class NotesDelete extends BaseCommand {
  static aliases = ["delete"];

  static args = {
    title: Args.string({ description: "Title of the note", required: true }),
  };

  static description = "Delete the specific note.";

  static examples = ["<%= config.bin %> <%= command.id %> 'Grocery List'"];

  public async run(): Promise<void> {
    const { args } = await this.parse(NotesDelete);

    const confirmed = await ux.confirm(
      ux.colorize(
        "red",
        `Warning: Are you sure you want to delete note ${ux.colorize(
          "yellow",
          `[TITLE: ${args.title}]`
        )}? ${ux.colorize("blue", "(Y/n)")}`
      )
    );

    if (!confirmed) {
      this.log("Operation cancelled.");
      return;
    }

    const removeNoteResult = await removeNote(args.title);
    if (removeNoteResult.isFailure) {
      console.log(removeNoteResult.error);
      return;
    }

    console.log(
      ux.colorize(
        "green",
        `Note '${ux.colorize("yellow", args.title)}' deleted successfully.`
      )
    );
  }
}
