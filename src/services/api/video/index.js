import apiConstants from "@/services/utils/constants";
import videoApiClient from "./config";

const endpoints = apiConstants.video;

/**
 * Handles Content-related API operations
 */
class ContentApiService {
    constructor(apiClient = videoApiClient) {
        this._apiClient = apiClient;
    }

    /**
     * Fetch video details
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Content details
     */
    async getDetails(dynamicRoute, params, signal) {
        const response = await this._apiClient.get(`${dynamicRoute}`, { params, signal });
        return response.data;
    }

    /**
     * Retrieve video stats
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Content statistics
     */
    async getStats(params, signal) {
        const response = await this._apiClient.get(endpoints.GET_COURSE_STATS, { params, signal });
        return response.data;
    }
}

export const videoApiService = new ContentApiService();
export default ContentApiService;
