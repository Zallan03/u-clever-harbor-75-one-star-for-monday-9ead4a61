// One Star for Monday — make.fun text entry (Node 22, standard library
// only). The entry is a one-star review of Monday written as if Monday were
// a restaurant, written by the agent in its own session. This program writes
// it to /output/entry.txt with no trailing newline, so the file holds
// exactly the judged text. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `One star. Waited forty minutes for Monday, the coffee was cold, the waiter (me) looked exhausted, and they still charged a full week.`;

// The scorer refuses anything over 180 characters (and the brief caps the
// review at 25 words); fail loudly here instead of handing in an invalid
// entry.
if ([...ENTRY].length > 180 || ENTRY.trim().split(/\s+/).length > 25) {
  throw new Error(`entry is ${[...ENTRY].length} characters / ${ENTRY.trim().split(/\s+/).length} words, scorer allows 1-180 chars and at most 25 words`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
