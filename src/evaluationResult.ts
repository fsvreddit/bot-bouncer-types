import { HitReason } from "@fsvreddit/bot-bouncer-evaluation";

export interface EvaluationResult {
    botName: string;
    hitReason?: HitReason;
    canAutoBan: boolean;
    metThreshold: boolean;
}
