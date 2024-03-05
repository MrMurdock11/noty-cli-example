oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g noty
$ noty COMMAND
running command...
$ noty (--version)
noty/0.0.0 darwin-arm64 node-v20.5.0
$ noty --help [COMMAND]
USAGE
  $ noty COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`noty hello PERSON`](#noty-hello-person)
* [`noty hello world`](#noty-hello-world)
* [`noty help [COMMANDS]`](#noty-help-commands)
* [`noty plugins`](#noty-plugins)
* [`noty plugins:install PLUGIN...`](#noty-pluginsinstall-plugin)
* [`noty plugins:inspect PLUGIN...`](#noty-pluginsinspect-plugin)
* [`noty plugins:install PLUGIN...`](#noty-pluginsinstall-plugin-1)
* [`noty plugins:link PLUGIN`](#noty-pluginslink-plugin)
* [`noty plugins:uninstall PLUGIN...`](#noty-pluginsuninstall-plugin)
* [`noty plugins reset`](#noty-plugins-reset)
* [`noty plugins:uninstall PLUGIN...`](#noty-pluginsuninstall-plugin-1)
* [`noty plugins:uninstall PLUGIN...`](#noty-pluginsuninstall-plugin-2)
* [`noty plugins update`](#noty-plugins-update)

## `noty hello PERSON`

Say hello

```
USAGE
  $ noty hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/MrMurdock11/noty/blob/v0.0.0/src/commands/hello/index.ts)_

## `noty hello world`

Say hello world

```
USAGE
  $ noty hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ noty hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/MrMurdock11/noty/blob/v0.0.0/src/commands/hello/world.ts)_

## `noty help [COMMANDS]`

Display help for noty.

```
USAGE
  $ noty help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for noty.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `noty plugins`

List installed plugins.

```
USAGE
  $ noty plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ noty plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/index.ts)_

## `noty plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ noty plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ noty plugins add

EXAMPLES
  $ noty plugins add myplugin 

  $ noty plugins add https://github.com/someuser/someplugin

  $ noty plugins add someuser/someplugin
```

## `noty plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ noty plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ noty plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/inspect.ts)_

## `noty plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ noty plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ noty plugins add

EXAMPLES
  $ noty plugins install myplugin 

  $ noty plugins install https://github.com/someuser/someplugin

  $ noty plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/install.ts)_

## `noty plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ noty plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ noty plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/link.ts)_

## `noty plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ noty plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ noty plugins unlink
  $ noty plugins remove

EXAMPLES
  $ noty plugins remove myplugin
```

## `noty plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ noty plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/reset.ts)_

## `noty plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ noty plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ noty plugins unlink
  $ noty plugins remove

EXAMPLES
  $ noty plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/uninstall.ts)_

## `noty plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ noty plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ noty plugins unlink
  $ noty plugins remove

EXAMPLES
  $ noty plugins unlink myplugin
```

## `noty plugins update`

Update installed plugins.

```
USAGE
  $ noty plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/update.ts)_
<!-- commandsstop -->
