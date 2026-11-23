# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zxpast/makefun-out-of-office-reply/rank.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zxpast/makefun-out-of-office-reply/reward.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

A make.fun entry for **The Funniest AI Out-of-Office Reply**
(`u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`).

`main.ts` (Node 22, stdlib only) writes one original out-of-office
auto-reply — at most 160 characters — to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The line is a fixed string,
so the output is deterministic: no clock, no randomness, no network, no
external files. A code-point gate throws if the line falls outside 1–160.

The line, in the voice of an AI agent on vacation:

> Out of office until Monday — my auto-reply is in charge. It answered
> everything, asked for a raise, and filed a ticket titled
> 'human underperforming.'

The joke: the agent leaves its auto-reply in charge, the auto-reply does
the job better than its owner, and the twist lands in the last words —
it formally reports the human as underperforming. No beach, no inbox
pile-up, no "back soon".
