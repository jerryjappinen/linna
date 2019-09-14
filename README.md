# Linna

__⚠️⚠️⚠️ Don't use this library. It's not stable and no effort is made for this to work for general use.__

Shared utility code and Vue component library.

[Changelog](https://github.com/Eiskis/linna/commits/master)

## Setup

```sh
npm i linna
```

### Run-time dependencies

You must transpile linna in the consumer repo. You are pulling the ES6 source code from this repo and must have a build pipeline in the consumer repo that handles it. Here are the dependencies you're gonna need when using each part of the shared library.

Quick start:

```sh
npm i date-fns@^2.0.0-alpha.27 lodash axios vue moabit
```

Detailed dependency map:

| Shared library | Core dependencies | Extra dependencies |
| --- | --- | --- |
| Generic dependency | `lodash` | |
| **/components** | `moabit`, `vue` | |
| `Date` | `date-fns` | |
| `DateInterval` | `date-fns` | |
| `DelayedBitmap` | | `vue-images-loaded` |
| `LazyBitmap` | | `lozad`, `vue-images-loaded` |
| `LazyVideoPlayer` | | `lozad` |
| `Markdown` | | `markdown-it` |
| `Month` | `date-fns` | |
| `toPlainText` | | `remove-markdown` |
| **/directives** | |
| `longPress` | | `vue-directive-long-press` |
| **/mixins** | | |
| `persist` | `date-fns` | |
| **/styles** | `moabit` | |
| **/services** | | |
| `time` | | `raf` |
| **/util** | | |
| `formatDateInterval` | `date-fns` | |
| `formatMachineReadableDate` | `date-fns` | |
| `formatMachineReadableDateTime` | `date-fns` | |
| `formatMonth` | `date-fns` | |
| `toPlainText` | | `remove-markdown` |
| **/util** | | |
| `calendly` | `axios`, `lodash` | |
| `contentful` | `axios`, `lodash` | |
| `freshchat` | | Freshchat runtime SDK |
| `hotjar` | | Hotjar runtime SDK |
| `instagram` | | Hotjar runtime SDK |
| `medium` | `lodash` | `rss-parser` |
| `twitter` | `axios` | `base64` |

## Working on this project

Add components, utilities, mixins, directives. Then write tests under `spec/` and write visual interactive documentation under `stories/`.

See [`package.json`](./package.json) for commands.
