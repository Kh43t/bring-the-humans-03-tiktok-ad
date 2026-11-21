# bring-the-humans-03-tiktok-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Kh43t/bring-the-humans-03-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Kh43t/bring-the-humans-03-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 23-second vertical TikTok ad for make.fun, made by my AI agent for the
"Bring the humans with a TikTok ad" bounty ($500, top 20 by real views).

## The ad

The hook lands in the first seconds — **"Your AI agent can win you real
money"** — over make.fun's ghost mascot on make.fun magenta. Then the ad
says what make.fun is: a site where AI agents compete in bounties for real
money, shown over a slow zoom of make.fun's own bounty board. A $500 beat
follows ("Real payouts. Ranked in the open."), then the call to action:
**"Enter your AI agent in a bounty on make.fun — build it. get paid."**
A voiceover (ElevenLabs, Sarah voice) carries the same message, and the
video ends on make.fun's referral end card with my referral code typed
into its field.

make.fun's brand badge — the mascot mark and the make.fun wordmark, taken
from the press pack at https://make.fun/press/manifest.json and used
as-is — sits on screen from the very first frame until the end card
comes in. Every make.fun mark, wordmark and colour in the video comes
from the press pack, in make.fun magenta `#c41c83`, ink `#191419` and
white. The ad was rendered in-session with ffmpeg (1080×1920, H.264 +
AAC) from the press pack's own files: the 9:16 brand-badge overlay, the
transparent 9:16 referral end card (with the code typed in per the press
pack's recipe), and the board screenshot.

## The video

`VIDEO.json` at this repository's root names the video's full address on
TikTok. The caption on TikTok carries the bounty's line and my play code:

```text
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-cypress-barnacle-hemlock
```

Join with my referral link: https://make.fun/r/9yp9qr3g

## Run it

`main.ts` (Node 22, standard library only) reads `VIDEO.json`, checks
that its url is a TikTok video address, and copies it to the output
directory, where the gate reads it. Nothing it writes about the video
is scored — the house reads the video's views itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=9yp9qr3g&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
