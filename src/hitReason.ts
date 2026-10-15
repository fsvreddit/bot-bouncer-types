export interface HitReasonDetailed {
    reason: string;
    details: { key: string; value: string }[];
}

export type HitReason = string | HitReasonDetailed;
