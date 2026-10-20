export type EvaluatorRegexFoundIn = "title" | "body" | "username" | "bio" | "displayname" | "image" | "url";

export interface EvaluatorRegex {
    evaluatorName: string;
    subName?: string;
    regex: string;
    flags?: string;
    foundIn: EvaluatorRegexFoundIn;
}
