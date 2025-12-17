import { client } from './common/client';
import type { ApiResponse } from '../types/common/response';
import type { ReportPageResponse, ReportStatus, TargetType } from '../types/adminReport';

interface GetReportsParams {
    page?: number;
    size?: number;
    status?: ReportStatus;
    targetType?: TargetType;
    from?: string;
    to?: string;
    sort?: string[];
}

export const getReports = async (params?: GetReportsParams) => {
    const response = await client.get<ApiResponse<ReportPageResponse>>('/api/admin/reports', {
        params,
    });
    return response.data;
};

export const updateReportStatus = async (reportId: number, status: ReportStatus, memo?: string) => {
    const response = await client.patch<ApiResponse<void>>(`/api/admin/reports/${reportId}`, {
        status,
        memo
    });
    return response.data;
};
