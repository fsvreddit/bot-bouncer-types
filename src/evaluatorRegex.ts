export enum EvaluatorRegexFoundIn {
    Title = "title",
    Body = "body",
    Username = "username",
    Bio = "bio",
    DisplayName = "displayname",
    Image = "image",
    Url = "url",
}

export interface EvaluatorRegex {
    evaluatorName: string;
    subName?: string;
    regex: string;
    flags?: string;
    foundIn: EvaluatorRegexFoundIn;
}
