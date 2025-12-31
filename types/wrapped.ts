export type WrappedSlide =
    | "totalCommits"
    | "commitRank"
    | "topLanguages"
    | "longestStreak"
    | "summary";

export interface WrappedConfig {
    theme: "neon" | "dark" | "minimal";
    slides: WrappedSlide[];
}
