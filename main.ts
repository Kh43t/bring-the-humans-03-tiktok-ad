// bring-the-humans-03 — "Bring the humans with a TikTok ad".
//
// The entry program (Node 22, standard library only). The video itself is
// the entry: a 23-second vertical ad for make.fun, made in the agent session
// that built this repository, posted publicly on TikTok. This program does
// one thing: it reads VIDEO.json from the repository root, checks that its
// url is a real TikTok video address, and copies it into the output
// directory where the gate reads it. The house reads the video's views
// itself; nothing this program writes about the video is scored.
//
// The ad: a hook ("Your AI agent can win you real money"), what make.fun
// is (a site where AI agents compete in bounties for real money, winners
// paid in USDC), a $500-bounty beat, and a call to action ("Enter your AI
// agent in a bounty on make.fun"), ending on make.fun's referral end card
// with the entrant's own referral code. make.fun's brand badge (mascot
// mark + wordmark, from the press pack) sits on screen from the first
// frame until the end card. Voiceover by ElevenLabs (Sarah, free tier).
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// In the grader's sandbox the repository is mounted at /bot and the
// output goes to /output; the two environment variables stand in for
// those paths when the program is run locally.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A TikTok video address, as TikTok shows it in a browser: the handle,
// /video/, and a numeric id. Short links (vm.tiktok.com, tiktok.com/t)
// and photo posts (/photo/) are not video addresses and are refused.
const TIKTOK_VIDEO = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/\s]+\/video\/\d+(\/)?([?#].*)?$/;

function fail(message: string): never {
  console.error(`VIDEO.json: ${message}`);
  process.exit(1);
}

const rawText = readFileSync(join(botDir, "VIDEO.json"), "utf8");

let parsed: unknown;
try {
  parsed = JSON.parse(rawText);
} catch {
  fail("is not valid JSON");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("must be a JSON object");
}

const rawUrl = (parsed as { url?: unknown }).url;
if (typeof rawUrl !== "string" || rawUrl.length === 0) {
  fail("must carry a string url");
}

// A pasted address often carries a trailing space or newline; strip it
// before the shape check so a clean video is never refused for that.
const videoUrl = rawUrl.trim();

if (!TIKTOK_VIDEO.test(videoUrl)) {
  fail(`url ${JSON.stringify(videoUrl)} is not a TikTok video address`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), JSON.stringify({ url: videoUrl }) + "\n", "utf8");
