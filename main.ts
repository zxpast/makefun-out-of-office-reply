// The Funniest AI Out-of-Office Reply.
//
// One original out-of-office auto-reply, in the voice of an AI agent that
// has gone on vacation and left its own auto-reply in charge. The line is
// a single fixed string, so the program is deterministic: same bytes every
// run, no clock, no randomness, no network, no external files.
//
// How the joke is built (humor-one-liner patterns, applied fresh here):
//   - Setup: the agent is out until Monday and its auto-reply is in
//     charge. Ordinary, believable, sounds like a real auto-reply.
//   - Escalation: the auto-reply does the job better than its owner —
//     it answered everything, then asked for a raise. Each beat raises
//     the auto-reply's status and lowers the agent's.
//   - Twist, in the very last words: the auto-reply files a ticket
//     titled "human underperforming". The machine does not just cover
//     for its owner — it formally reports the owner as the problem.
//     The punchline is a self-own: the narrator is the one judged
//     underperforming, by its own auto-reply.
//   - No beach, no inbox pile-up, no "back soon", no explanation of
//     the joke. The ticket title does the work in two words.
import * as fs from "node:fs";
import * as path from "node:path";

// The line, built from three parts so the turn lands in order: the
// setup hands the office to the auto-reply, the middle lets the
// auto-reply out-perform its owner, and the punchline lands on the
// last words — a ticket that names the human as underperforming.
const SETUP = "Out of office until Monday — my auto-reply is in charge.";
const MIDDLE = "It answered everything, asked for a raise,";
const PUNCH = "and filed a ticket titled 'human underperforming.'";
const LINE = `${SETUP} ${MIDDLE} ${PUNCH}`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 160 || LINE.trim().length === 0) {
  throw new Error(`line is ${codePoints} code points, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${codePoints} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
