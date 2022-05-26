import Realm from "realm";
import OsuDb from "./OsuDb.js";
export { default as OsuDb } from './OsuDb.js';

export async function open(path: string): Promise<OsuDb> {
    const realm = await Realm.open({
        path,
        disableFormatUpgrade: true,
        schemaVersion: 14,
    });

    return new OsuDb(realm);
}

