import { JSONSchemaType } from "ajv";

export interface ControlSubSettings {
    evaluationDisabled: boolean;
    clientReclassificationDisabled?: boolean;
    proactiveEvaluationEnabled?: boolean;
    proactiveEvaluationBatchSize?: number;
    maxInactivityMonths?: number;
    botBouncerBots: string[];
    trustedSubmitters: string[];
    trustedSubmitterAutoThreshold?: number;
    trustedSubmitterAutoExcludedUsers?: string[];
    thresholdForSubmitterCalculation?: number;
    reporterBlacklist: string[];
    numberOfWikiPages?: number;
    bulkSubmitters?: string[];
    cleanupDisabled?: boolean;
    uptimeMonitoringEnabled?: boolean;
    messageMonitoringEnabled?: boolean;
    botPostMonitoringEnabled?: boolean;
    botPostMonitorThresholdMinutes?: number;
    monitoringWebhook?: string;
    botNotificationsWebhook?: string;
    backlogWebhook?: string;
    banNoteCheckingEnabled?: boolean;
    observerSubreddits?: string[];
    postCreationQueueProcessingEnabled?: boolean;
    postCreationQueueAlertLevel?: number;
    createAISummaryOnNewPosts?: boolean;
    allowAccountReminders?: boolean;
    allowRechecks?: boolean;
    allowClassificationQueries?: boolean;
    allowBans?: boolean;
    allowUnbans?: boolean;
    allowNewSubmissions?: boolean;
    redosCheckerEnabled?: boolean;
    evaluatorVariableUpdatesEnabled?: boolean;
    enableModQueueRemoval?: boolean;
    openAIMinimumAccountAgeInDays?: number;
    openAIMinimumContentCount?: number;
    openAINotificationsWebhook?: string;
    appRemovedMessage?: string;
    autoAccountRecoveryEnabled?: boolean;
}

export const controlSubSettingsSchema: JSONSchemaType<ControlSubSettings> = {
    type: "object",
    properties: {
        evaluationDisabled: { type: "boolean" },
        clientReclassificationDisabled: { type: "boolean", nullable: true },
        proactiveEvaluationEnabled: { type: "boolean", nullable: true },
        proactiveEvaluationBatchSize: { type: "number", nullable: true },
        maxInactivityMonths: { type: "number", nullable: true },
        botBouncerBots: { type: "array", items: { type: "string" } },
        trustedSubmitters: { type: "array", items: { type: "string" } },
        trustedSubmitterAutoThreshold: { type: "number", nullable: true },
        trustedSubmitterAutoExcludedUsers: { type: "array", items: { type: "string" }, nullable: true },
        thresholdForSubmitterCalculation: { type: "number", nullable: true },
        reporterBlacklist: { type: "array", items: { type: "string" } },
        numberOfWikiPages: { type: "number", nullable: true },
        bulkSubmitters: { type: "array", items: { type: "string" }, nullable: true },
        cleanupDisabled: { type: "boolean", nullable: true },
        uptimeMonitoringEnabled: { type: "boolean", nullable: true },
        messageMonitoringEnabled: { type: "boolean", nullable: true },
        botPostMonitoringEnabled: { type: "boolean", nullable: true },
        botPostMonitorThresholdMinutes: { type: "number", nullable: true },
        monitoringWebhook: { type: "string", nullable: true },
        botNotificationsWebhook: { type: "string", nullable: true },
        backlogWebhook: { type: "string", nullable: true },
        banNoteCheckingEnabled: { type: "boolean", nullable: true },
        observerSubreddits: { type: "array", items: { type: "string" }, nullable: true },
        postCreationQueueProcessingEnabled: { type: "boolean", nullable: true },
        postCreationQueueAlertLevel: { type: "number", nullable: true },
        createAISummaryOnNewPosts: { type: "boolean", nullable: true },
        allowAccountReminders: { type: "boolean", nullable: true },
        allowRechecks: { type: "boolean", nullable: true },
        allowClassificationQueries: { type: "boolean", nullable: true },
        allowBans: { type: "boolean", nullable: true },
        allowUnbans: { type: "boolean", nullable: true },
        allowNewSubmissions: { type: "boolean", nullable: true },
        legacyWikiPageUpdateFrequencyMinutes: { type: "number" },
        redosCheckerEnabled: { type: "boolean", nullable: true },
        evaluatorVariableUpdatesEnabled: { type: "boolean", nullable: true },
        enableModQueueRemoval: { type: "boolean", nullable: true },
        openAIMinimumAccountAgeInDays: { type: "number", nullable: true },
        openAIMinimumContentCount: { type: "number", nullable: true },
        openAINotificationsWebhook: { type: "string", nullable: true },
        appRemovedMessage: { type: "string", nullable: true },
        autoAccountRecoveryEnabled: { type: "boolean", nullable: true },
    },
    required: ["evaluationDisabled", "trustedSubmitters", "reporterBlacklist"],
};
