import { beatmapMetadataSchema, beatmapSchema, beatmapsetSchema } from "./schema";

type PropsAsAny<T, K extends keyof T> = { [P in K]: any; }


type BeatmapSchemaProperties = PropsAsAny<typeof beatmapSchema['properties'], keyof typeof beatmapSchema['properties']>;

export class Beatmap implements BeatmapSchemaProperties {
    public ID!: Realm.BSON.ObjectId;
    public DifficultyName!: string;
    public Metadata!: BeatmapMetadata;
    public CountdownOffset!: number;
    public TimelineZoom!: number;
    public GridSize!: number;
    public BeatDivisor!: number;
    public DistanceSpacing!: number;
    public StackLeniency!: number;
    public AudioLeadIn!: number;
    public BPM!: number;
    public Length!: number;
    public OnlineID!: number;
    public Status!: number;
    public MD5Hash!: string;
    public Hash!: string;
    public StarRating!: number;
    public Hidden!: number;
    public SamplesMatchPlaybackRate!: boolean;
    public EpilepsyWarning!: boolean;
    public WidescreenStoryboard!: boolean;
    public LetterboxInBreaks!: boolean;
    public SpecialStyle!: boolean;
    public BeatmapSet!: Beatmapset;

    public Difficulty: any;
    public Ruleset: any;
    public UserSettings!: any;
}

type BeatmapMetadataProps = PropsAsAny<typeof beatmapMetadataSchema['properties'], keyof typeof beatmapMetadataSchema['properties']>

class BeatmapMetadata implements BeatmapMetadataProps {
    public Title!: string;
    public TitleUnicode!: string;
    public Artist!: string;
    public ArtistUnicode!: string;
    public Author!: string;
    public Source!: string;
    public Tags!: string;
    public PreviewTime!: number;
    public AudioFile!: string;
    public BackgroundFile!: string;
}

type BeatmapsetSchemaProps = PropsAsAny<typeof beatmapsetSchema['properties'], keyof typeof beatmapsetSchema['properties']>

export class Beatmapset implements BeatmapsetSchemaProps {
    public Beatmaps!: Beatmap[];
    public ID!: Realm.BSON.ObjectId;
    public OnlineID!: number;
    public DateAdded!: Date;
    public Files!: any;
    public Status!: number;
    public DeletePending!: boolean;
    public Hash!: string;
    public Protected!: boolean;
}
