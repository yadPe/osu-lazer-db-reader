import EventEmitter from "events";
import { beatmapSchema, beatmapsetSchema } from "./schema.js";
import { Beatmap, Beatmapset } from "./shapes";

interface OsuDbEventsMap extends Record<keyof typeof OsuDb.Events, (...args: any[]) => void> {
    beatmapsetInserted: (index: number, beatmapset: Beatmapset) => void;
    beatmapsetDeleted: (index: number) => void;
    beatmapInserted: (index: number, beatmap: Beatmap) => void;
    beatmapDeleted: (index: number) => void;
}

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

    override addListener<E extends keyof OsuDbEventsMap>(eventName: E, listener: OsuDbEventsMap[E]): this {
        return super.addListener(eventName, listener)
    }

    override emit<E extends keyof OsuDbEventsMap>(eventName: E, ...args: Parameters<OsuDbEventsMap[E]>): boolean {
        return super.emit(eventName, ...args)
    }

    public get beatmapsets(): Beatmapset[] {
        return this.#realmBeatmapset.map(b => b.toJSON())
    }

    public get beatmaps(): Beatmap[] {
        return this.#realmBeatmap.map(b => b.toJSON())
    }

    #setupEventListeners() {
        const onBeatmapsetChange: Realm.CollectionChangeCallback<Beatmapset> = (beatmapsets, changes) => {
            changes.insertions.forEach(index => {
                const insertedBeatmapset = beatmapsets[index] as Beatmapset;
                this.emit(OsuDb.Events.beatmapsetInserted, index, insertedBeatmapset)
            })

            changes.deletions.forEach(index => {
                this.emit(OsuDb.Events.beatmapsetDeleted, index)
            })
        }
        this.#realmBeatmapset.addListener(onBeatmapsetChange)

        const onBeatmapChange: Realm.CollectionChangeCallback<Beatmap> = (beatmap, changes) => {
            changes.insertions.forEach(index => {
                const insertedBeatmap = beatmap[index] as Beatmap;
                this.emit(OsuDb.Events.beatmapInserted, index, insertedBeatmap)
            })

            changes.deletions.forEach(index => {
                this.emit(OsuDb.Events.beatmapDeleted, index)
            })
        }
        this.#realmBeatmap.addListener(onBeatmapChange)
    }
}

