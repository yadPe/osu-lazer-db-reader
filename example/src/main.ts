import { open, OsuDb } from "../../lib/index.js";

const osuDb = await open('/Users/ypetitot/.local/share/osu/client.realm');

// Log the first beatmap of the second beatmapset
console.log(osuDb.beatmapsets[1]?.Beatmaps[0]);

osuDb.addListener(OsuDb.Events.beatmapsetInserted, (_index, insertedBeatmapset) => {
    console.log(`Inserted ${insertedBeatmapset?.ID}!`);
    console.log(`beatmapset id = ${insertedBeatmapset?.OnlineID}`);
})

osuDb.addListener(OsuDb.Events.beatmapsetDeleted, index => {
    console.log(`Deleted at index ${index}!`);
})
