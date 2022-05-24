import EventEmitter from "events";
import { beatmapSchema, beatmapsetSchema } from "./schema.js";
import { Beatmap, Beatmapset } from "./shapes";

export default class OsuDb extends EventEmitter {
    #realm: Realm;
    #realmBeatmapset: Realm.Results<Beatmapset & Realm.Object>;
    #realmBeatmap: Realm.Results<Beatmap & Realm.Object>;

    static Events = {
        beatmapsetDeleted: 'beatmapsetDeleted',
        beatmapsetInserted: 'beatmapsetInserted',
        beatmapInserted: 'beatmapInserted',
        beatmapDeleted: 'beatmapDeleted',
    } as const;

    constructor(realm: Realm) {
        super();
        this.#realm = realm
        this.#realmBeatmapset = this.#realm.objects<Beatmapset>(beatmapsetSchema.name);
        this.#realmBeatmap = this.#realm.objects<Beatmap>(beatmapSchema.name);

        this.#setupEventListeners();
    }

    override addListener<T extends keyof typeof OsuDb.Events>(eventName: T, listener: (...args: any[]) => void): this {
        return super.addListener(eventName, listener)
    }

    public get beatmapsets(): Beatmapset[] {
        return this.#realmBeatmapset.map(b => b.toJSON())
    }

    public get beatmaps(): Beatmapset[] {
        return this.#realmBeatmap.map(b => b.toJSON())
    }

    #setupEventListeners() {
        const onBeatmapsetChange: Realm.CollectionChangeCallback<Beatmapset> = (beatmapsets, changes) => {
            changes.insertions.forEach(index => {
                const insertedBeatmapset = beatmapsets[index];
                this.emit(OsuDb.Events.beatmapsetInserted, index, insertedBeatmapset)
            })

            changes.deletions.forEach(index => {
                this.emit(OsuDb.Events.beatmapsetDeleted, index)
            })
        }
        this.#realmBeatmapset.addListener(onBeatmapsetChange)

        const onBeatmapChange: Realm.CollectionChangeCallback<Beatmap> = (beatmap, changes) => {
            changes.insertions.forEach(index => {
                const insertedBeatmap = beatmap[index];
                this.emit(OsuDb.Events.beatmapInserted, index, insertedBeatmap)
            })

            changes.deletions.forEach(index => {
                this.emit(OsuDb.Events.beatmapDeleted, index)
            })
        }
        this.#realmBeatmap.addListener(onBeatmapChange)
    }
}

