/* eslint-disable @stylistic/quote-props */

import { JSONSchemaType } from "ajv";
import { UserFlag, UserStatus } from "./index.js";

export interface AppealRegexConfig {
    "name": string;
    "usernameRegex"?: string[];
    "~usernameRegex"?: string[];
    "messageBodyRegex"?: string[];
    "~messageBodyRegex"?: string[];
    "evaluatorNameRegex"?: string[];
    "~evaluatorNameRegex"?: string[];
    "evaluatorHitReasonRegex"?: string[];
    "~evaluatorHitReasonRegex"?: string[];
    "evaluatorDetailRegex"?: string[];
    "~evaluatorDetailRegex"?: string[];
    "currentEvaluatorNameRegex"?: string[];
    "~currentEvaluatorNameRegex"?: string[];
    "currentEvaluatorHitReasonRegex"?: string[];
    "~currentEvaluatorHitReasonRegex"?: string[];
    "currentEvaluatorDetailRegex"?: string[];
    "~currentEvaluatorDetailRegex"?: string[];
    "bioRegex"?: string[];
    "~bioRegex"?: string[];
    "originalBioRegex"?: string[];
    "~originalBioRegex"?: string[];
    "socialLinkRegex"?: string[];
    "~socialLinkRegex"?: string[];
    "originalSocialLinkRegex"?: string[];
    "~originalSocialLinkRegex"?: string[];
    "modNoteTextRegex"?: string[];
    "~modNoteTextRegex"?: string[];
}

export interface AppealConfig extends AppealRegexConfig {
    draft?: boolean;
    isHackedAppealConfig?: boolean;
    priority?: number;
    submitter?: string;
    operator?: string;
    banDateFrom?: string;
    banDateTo?: string;
    banDateBeforeDays?: number;
    banDateAfterDays?: number;
    flags?: UserFlag[];
    "~flags"?: UserFlag[];
    hasMoreThanOneCommentOnPost?: boolean;
    hasNSFWPosts?: boolean;
    setStatus?: UserStatus | UserFlag;
    privateReply?: string;
    reply?: string;
    replyDelay?: {
        minMinutes: number;
        maxMinutes: number;
    };
    archive?: boolean;
    mute?: number;
    highlight?: boolean;
    respondToFurtherMessages?: boolean;
}

const acceptableMuteDurations = [3, 7, 28];

const dateRegex = /^\d{4}-\d{2}-\d{2}(?: \d{2}:\d{2})?$/;

export const appealConfigSchema: JSONSchemaType<AppealConfig[]> = {
    type: "array",
    items: {
        type: "object",
        properties: {
            name: { type: "string" },
            draft: { type: "boolean", nullable: true },
            isHackedAppealConfig: { type: "boolean", nullable: true },
            priority: { type: "number", nullable: true },
            submitter: { type: "string", nullable: true },
            operator: { type: "string", nullable: true },
            usernameRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~usernameRegex": { type: "array", items: { type: "string" }, nullable: true },
            messageBodyRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~messageBodyRegex": { type: "array", items: { type: "string" }, nullable: true },
            banDateFrom: { type: "string", pattern: dateRegex.source, nullable: true },
            banDateTo: { type: "string", pattern: dateRegex.source, nullable: true },
            banDateBeforeDays: { type: "number", minimum: 0, nullable: true },
            banDateAfterDays: { type: "number", minimum: 0, nullable: true },
            evaluatorNameRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~evaluatorNameRegex": { type: "array", items: { type: "string" }, nullable: true },
            evaluatorHitReasonRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~evaluatorHitReasonRegex": { type: "array", items: { type: "string" }, nullable: true },
            evaluatorDetailRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~evaluatorDetailRegex": { type: "array", items: { type: "string" }, nullable: true },
            currentEvaluatorNameRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~currentEvaluatorNameRegex": { type: "array", items: { type: "string" }, nullable: true },
            currentEvaluatorHitReasonRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~currentEvaluatorHitReasonRegex": { type: "array", items: { type: "string" }, nullable: true },
            currentEvaluatorDetailRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~currentEvaluatorDetailRegex": { type: "array", items: { type: "string" }, nullable: true },
            bioRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~bioRegex": { type: "array", items: { type: "string" }, nullable: true },
            originalBioRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~originalBioRegex": { type: "array", items: { type: "string" }, nullable: true },
            socialLinkRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~socialLinkRegex": { type: "array", items: { type: "string" }, nullable: true },
            originalSocialLinkRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~originalSocialLinkRegex": { type: "array", items: { type: "string" }, nullable: true },
            flags: { type: "array", items: { type: "string", enum: Object.values(UserFlag) }, nullable: true },
            "~flags": { type: "array", items: { type: "string", enum: Object.values(UserFlag) }, nullable: true },
            modNoteTextRegex: { type: "array", items: { type: "string" }, nullable: true },
            "~modNoteTextRegex": { type: "array", items: { type: "string" }, nullable: true },
            hasMoreThanOneCommentOnPost: { type: "boolean", nullable: true },
            hasNSFWPosts: { type: "boolean", nullable: true },
            setStatus: { type: "string", enum: [...Object.values(UserStatus), ...Object.values(UserFlag)], nullable: true },
            privateReply: { type: "string", nullable: true },
            reply: { type: "string", nullable: true },
            replyDelay: {
                type: "object",
                properties: {
                    minMinutes: { type: "number", minimum: 0, maximum: 60 },
                    maxMinutes: { type: "number", minimum: 0, maximum: 1440 },
                },
                required: ["minMinutes", "maxMinutes"],
                additionalProperties: false,
                nullable: true,
            },
            archive: { type: "boolean", nullable: true },
            mute: { type: "number", enum: acceptableMuteDurations, nullable: true },
            highlight: { type: "boolean", nullable: true },
            respondToFurtherMessages: { type: "boolean", nullable: true },
        },
        additionalProperties: false,
        required: ["name"],
    },
};
