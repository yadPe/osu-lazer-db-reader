# Osu Lazer db reader

Read and react to changes in the new realm database of osu lazer.

⚠️ **This is a work in progress.**
Only beatmapset and beatmap are supported. Contributions are welcome!

## Installation

npm::
`npm install osu-lazer-db-reader`

yarn:
`yarn add osu-lazer-db-reader`

## Exemple

```ts
import { open, OsuDb } from "osu-lazer-db-reader";

const osuDb = await open("/path/to/osu-lazer-db.realm");

// Get all beatmapsets and beatmaps
const { beatmapsets, beatmaps } = osuDb;

// Add a listener to the beatmapset insertion
osuDb.addListener(
  OsuDb.Events.beatmapsetInserted,
  (_index, insertedBeatmapset) => {
    console.log(`New beatmapset: ${insertedBeatmapset.title}`);
    console.log(`New beatmapset: ${insertedBeatmapset.onlineId}`);
  }
);
```
