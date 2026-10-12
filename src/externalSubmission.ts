import { EvaluationResult } from "./evaluationResult";
import { UserStatus } from "./userStatus";

export interface ExternalSubmission {
    username: string;
    submitter?: string;
    subreddit?: string;
    reportContext?: string;
    publicContext?: boolean;
    targetId?: string;
    initialStatus?: UserStatus;
    evaluationResults?: EvaluationResult[];
    sendFeedback?: boolean;
    proactive?: boolean;
    immediate?: boolean;
};
