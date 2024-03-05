import { Hook } from "@oclif/core";
import * as fs from "node:fs";
import * as path from "node:path";

const hook: Hook<"init"> = async function (opts) {
  if (!fs.existsSync(opts.config.dataDir))
    fs.mkdirSync(opts.config.dataDir, { recursive: true });

  const storagePath = path.join(opts.config.dataDir, "_s.toml");
  if (!fs.existsSync(storagePath)) fs.writeFileSync(storagePath, "");
};

export default hook;
