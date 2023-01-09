import assert from "assert";
import { isEqual } from "lodash";
import { solve } from "./solve";

const test = () => {
  const case1 = [
    "abba",
    "baba",
    "caca",
    "dada",
    "abbe",
    "babe",
    "ceca",
    "dead",
    "abed",
    "bade",
    "bead",
    "aced",
    "cade",
    "dace",
    "baff",
    "caff",
    "daff",
    "cafe",
    "face",
    "deaf",
    "fade",
    "gaga",
    "agee",
    "gage",
    "cage",
    "aged",
    "egad",
    "gaed",
    "gaff",
    "abaca",
    "bacca",
    "caeca",
    "added",
    "baaed",
    "faded",
    "decaf",
    "faced",
    "dagga",
    "adage",
    "gaged",
    "badge",
    "cadge",
    "caged",
    "gaffe",
    "fadge",
    "baccae",
    "beaded",
    "dabbed",
    "accede",
    "decade",
    "cabbed",
    "efface",
    "daffed",
    "baffed",
    "deface",
    "facade",
    "degage",
    "gadded",
    "gagged",
    "badged",
    "bagged",
    "gabbed",
    "cadged",
    "fadged",
    "fagged",
    "gaffed",
    "acceded",
    "defaced",
    "effaced",
    "baggage",
    "cabbage",
    "feedbag",
    "cabbaged",
  ].sort();

  const sortedAnswer = solve("a", "bcdefg").sort();

  assert(
    isEqual(sortedAnswer, case1),
    `\nexpected ${JSON.stringify(case1)}\nreceived ${JSON.stringify(
      sortedAnswer
    )}\n`
  );
};

test();
