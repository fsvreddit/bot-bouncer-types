export type EvaluatorRegexFoundIn = "title" | "body" | "username" | "bio" | "image";

export interface EvaluatorRegex {
    evaluatorName: string;
    subName?: string;
    regex: string;
    flags?: string;
    foundIn: EvaluatorRegexFoundIn;
}
