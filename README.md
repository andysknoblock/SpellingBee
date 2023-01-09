# SpellingBee

Your goal is to create a program that can solve the New York Times Spelling Bee.

In the `solve.ts` file, you will see a function called `solve`. It takes a string of required letters for example `"a"` and a string of optional letters `"bcdefg"`. The output you produce should be a list of all words that contain all the required letters and only use letters that are either required or optional eg. `["babe", "cage", ...]`. Words must be of length 4 or more.

## Prerequisites

Install node - see if you can run `node --version`, if not, `brew install node`

Install package manager - built in package manager is cringe, we use pnpm here. Try the command below, if it doesn't work, you don't have corepack, install it using `brew install corepack`.

```
corepack enable
corepack prepare pnpm@latest --activate
```

## Set up your repo

This repo is mostly set up for you, the only thing you need to do is install node dependencies.

```
pnpm i
```

## Running

I have a pre-prepared command to run this for ya. If you want to run on the default case (a, bcdefg)

```
pnpm solve
```

or

```
pnpm solve [required letters] [optional letters]
```

## Testing

```
pnpm test
```
