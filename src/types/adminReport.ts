import type { PageResponse } from './common/response';

export type ReportStatus = 'PENDING' | 'RESOLVED' | 'REJECTED';
export type TargetType = 'USER' | 'ARTIFACT' | 'COMMENT';

export interface Report {
    reportId: number;
    reason: string;
    status: ReportStatus;
    createdAt: string;
    adminMemo?: string;
    reporterId: number;
    reporterEmail: string;
    reporterNickname: string;
    targetId: number;
    targetType: TargetType;
    targetName?: string; // Optional if not in response, but useful if backend provides it or we derive it
}

export type ReportPageResponse = PageResponse<Report>;
