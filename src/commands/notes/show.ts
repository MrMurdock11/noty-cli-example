import select from "@inquirer/select";
import { Args, ux } from "@oclif/core";

import BaseCommand from "../../common/base.command";
import { formatDate } from "../../common/utils";
import { getNote, getNotes } from "../../services/storage";

export default class NotesShow extends BaseCommand {
  static aliases = ["show"];

  static args = {
    title: Args.string({ description: "Title of the note" }),
  };

  static description = "Show a content of the specific note.";

  static examples = ["<%= config.bin %> <%= command.id %> 'Grocery List'"];

  public async run(): Promise<void> {
    const { args } = await this.parse(NotesShow);

    await (args.title ? this.showNote(args.title) : this.selectAndShowNote());
  }

  private displayNote(title: string, note: NoteModel): void {
    const [date, content] = note;

    console.log(`Showing note ${ux.colorize("yellow", title)}.\n`);
    console.log(
      `${ux.colorize("green", "Title:")} ${ux.colorize("blue", title)}`
    );
    console.log(
      `${ux.colorize("green", "Created:")} ${ux.colorize(
        "blue",
        formatDate(date)
      )}`
    );
    console.log(
      `${ux.colorize("green", "Content:")}\n${ux.colorize("blue", content)}`
    );
  }

  private async selectAndShowNote(): Promise<void> {
    const getNotesResult = await getNotes();
    if (getNotesResult.isFailure) {
      console.log(getNotesResult.error);
      return;
    }

    const selectedTitle = await select({
      choices: Object.entries(getNotesResult.value).map(([title]) => ({
        name: title,
        value: title,
      })),
      message: "Select a note",
    });

    const note = getNotesResult.value[selectedTitle];
    this.displayNote(selectedTitle, note);
  }

  private async showNote(title: string): Promise<void> {
    const getNoteResult = await getNote(title);
    if (getNoteResult.isFailure) {
      console.log(getNoteResult.error);
      return;
    }

    const note = getNoteResult.value;
    this.displayNote(title, note);
  }
}
