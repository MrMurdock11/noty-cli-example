import { Command } from "@oclif/core";

export default abstract class BaseCommand extends Command {
  abstract run(): Promise<void>;
}
