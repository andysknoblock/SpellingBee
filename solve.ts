export function solve(
  requiredLetters: string,
  optionalLetters: string
): string[] {
  /** array like `['a']` */
  const requiredCharacters = [...requiredLetters];
  /** array like `['b', 'c', 'd']` */
  const optionalCharacters = [...optionalLetters];

  return [];
}

if (!(process.argv.length === 4 || process.argv.length === 2)) {
  console.log("usage: pnpm solve [required letters] [optional letters]");
} else {
  const [required, all] =
    process.argv.length === 4
      ? process.argv.slice(2, undefined)
      : ["a", "bcdefg"];

  console.log("Your solution", JSON.stringify(solve(required, all), null, 2));
}
