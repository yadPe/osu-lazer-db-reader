export const beatmapSchema = {
    name: 'Beatmap',
    properties: {
        ID: {
            name: 'ID',
            type: 'uuid',
            indexed: true,
            optional: false,
            mapTo: 'ID'
        },
        DifficultyName: {
            name: 'DifficultyName',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'DifficultyName'
        },
        Ruleset: {
            name: 'Ruleset',
            type: 'object',
            objectType: 'Ruleset',
            indexed: false,
            optional: true,
            mapTo: 'Ruleset'
        },
        Difficulty: {
            name: 'Difficulty',
            type: 'object',
            objectType: 'BeatmapDifficulty',
            indexed: false,
            optional: true,
            mapTo: 'Difficulty'
        },
        Metadata: {
            name: 'Metadata',
            type: 'object',
            objectType: 'BeatmapMetadata',
            indexed: false,
            optional: true,
            mapTo: 'Metadata'
        },
        UserSettings: {
            name: 'UserSettings',
            type: 'object',
            objectType: 'BeatmapUserSettings',
            indexed: false,
            optional: true,
            mapTo: 'UserSettings'
        },
        BeatmapSet: {
            name: 'BeatmapSet',
            type: 'object',
            objectType: 'BeatmapSet',
            indexed: false,
            optional: true,
            mapTo: 'BeatmapSet'
        },
        Status: {
            name: 'Status',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'Status'
        },
        OnlineID: {
            name: 'OnlineID',
            type: 'int',
            indexed: true,
            optional: false,
            mapTo: 'OnlineID'
        },
        Length: {
            name: 'Length',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'Length'
        },
        BPM: {
            name: 'BPM',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'BPM'
        },
        Hash: {
            name: 'Hash',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Hash'
        },
        StarRating: {
            name: 'StarRating',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'StarRating'
        },
        MD5Hash: {
            name: 'MD5Hash',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'MD5Hash'
        },
        Hidden: {
            name: 'Hidden',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'Hidden'
        },
        AudioLeadIn: {
            name: 'AudioLeadIn',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'AudioLeadIn'
        },
        StackLeniency: {
            name: 'StackLeniency',
            type: 'float',
            indexed: false,
            optional: false,
            mapTo: 'StackLeniency'
        },
        SpecialStyle: {
            name: 'SpecialStyle',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'SpecialStyle'
        },
        LetterboxInBreaks: {
            name: 'LetterboxInBreaks',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'LetterboxInBreaks'
        },
        WidescreenStoryboard: {
            name: 'WidescreenStoryboard',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'WidescreenStoryboard'
        },
        EpilepsyWarning: {
            name: 'EpilepsyWarning',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'EpilepsyWarning'
        },
        SamplesMatchPlaybackRate: {
            name: 'SamplesMatchPlaybackRate',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'SamplesMatchPlaybackRate'
        },
        DistanceSpacing: {
            name: 'DistanceSpacing',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'DistanceSpacing'
        },
        BeatDivisor: {
            name: 'BeatDivisor',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'BeatDivisor'
        },
        GridSize: {
            name: 'GridSize',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'GridSize'
        },
        TimelineZoom: {
            name: 'TimelineZoom',
            type: 'double',
            indexed: false,
            optional: false,
            mapTo: 'TimelineZoom'
        },
        CountdownOffset: {
            name: 'CountdownOffset',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'CountdownOffset'
        }
    },
    primaryKey: 'ID',
    embedded: false
} as const;

export const beatmapMetadataSchema = {
    name: 'BeatmapMetadata',
    properties: {
        Title: {
            name: 'Title',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Title'
        },
        TitleUnicode: {
            name: 'TitleUnicode',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'TitleUnicode'
        },
        Artist: {
            name: 'Artist',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Artist'
        },
        ArtistUnicode: {
            name: 'ArtistUnicode',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'ArtistUnicode'
        },
        Author: {
            name: 'Author',
            type: 'object',
            objectType: 'RealmUser',
            indexed: false,
            optional: true,
            mapTo: 'Author'
        },
        Source: {
            name: 'Source',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Source'
        },
        Tags: {
            name: 'Tags',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Tags'
        },
        PreviewTime: {
            name: 'PreviewTime',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'PreviewTime'
        },
        AudioFile: {
            name: 'AudioFile',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'AudioFile'
        },
        BackgroundFile: {
            name: 'BackgroundFile',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'BackgroundFile'
        }
    },
    embedded: false
} as const;

export const beatmapsetSchema = {
    name: 'BeatmapSet',
    properties: {
        ID: {
            name: 'ID',
            type: 'uuid',
            indexed: true,
            optional: false,
            mapTo: 'ID'
        },
        OnlineID: {
            name: 'OnlineID',
            type: 'int',
            indexed: true,
            optional: false,
            mapTo: 'OnlineID'
        },
        DateAdded: {
            name: 'DateAdded',
            type: 'date',
            indexed: false,
            optional: false,
            mapTo: 'DateAdded'
        },
        Beatmaps: {
            name: 'Beatmaps',
            type: 'list',
            objectType: 'Beatmap',
            indexed: false,
            optional: false,
            mapTo: 'Beatmaps'
        },
        Files: {
            name: 'Files',
            type: 'list',
            objectType: 'RealmNamedFileUsage',
            indexed: false,
            optional: false,
            mapTo: 'Files'
        },
        Status: {
            name: 'Status',
            type: 'int',
            indexed: false,
            optional: false,
            mapTo: 'Status'
        },
        DeletePending: {
            name: 'DeletePending',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'DeletePending'
        },
        Hash: {
            name: 'Hash',
            type: 'string',
            indexed: false,
            optional: true,
            mapTo: 'Hash'
        },
        Protected: {
            name: 'Protected',
            type: 'bool',
            indexed: false,
            optional: false,
            mapTo: 'Protected'
        }
    },
    primaryKey: 'ID',
    embedded: false
} as const;

