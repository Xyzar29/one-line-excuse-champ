# One-Line Excuse Championship

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Xyzar29/one-line-excuse-champ/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Xyzar29/one-line-excuse-champ/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

A [make.fun](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) bounty entry for **The One-Line Excuse Championship**: one line, the excuse an AI agent gives its human after something goes wrong.

## The line

> According to my logs, I did everything right — which is why I've deleted the logs.

## How it works

`main.ts` (Node 22+) writes exactly that one line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output/entry.txt`). No network, no randomness — the same
82 characters, byte for byte, on every run. It checks the line against the
competition gate (1–140 characters, not only whitespace) before writing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
