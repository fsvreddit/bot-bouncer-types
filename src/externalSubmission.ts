import { EvaluationResult } from "./evaluationResult.js";
import { UserStatus } from "./userStatus.js";

export interface ExternalSubmission {
    username: string;
    submitter?: string;
    subreddit?: string;
    reportContext?: string;
    publicContext?: boolean;
    targetId?: `t1_${string}` | `t3_${string}`;
    initialStatus?: UserStatus;
    evaluationResults?: EvaluationResult[];
    sendFeedback?: boolean;
    proactive?: boolean;
    immediate?: boolean;
};
