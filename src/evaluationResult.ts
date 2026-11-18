import { HitReason } from "./hitReason.js";

export interface EvaluationResult {
    botName: string;
    hitReason?: HitReason;
    canAutoBan: boolean;
    metThreshold: boolean;
}
