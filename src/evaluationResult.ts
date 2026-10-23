import { HitReason } from "./index.js";

export interface EvaluationResult {
    botName: string;
    hitReason?: HitReason;
    canAutoBan: boolean;
    metThreshold: boolean;
}
