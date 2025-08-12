import apiConstants from "@/services/utils/constants";
import lessonApiClient from "./config";

const endpoints = apiConstants.lesson;

/**
 * Handles Lesson-related API operations
 */
class LessonApiService {
    constructor(apiClient = lessonApiClient) {
        this._apiClient = apiClient;
    }

    /**
     * Fetch lesson details
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Lesson details
     */
    async getDetails(dynamicRoute, params, signal) {
        const response = await this._apiClient.get(`${dynamicRoute}`, { params, signal });
        return response.data;
    }

    /**
     * Retrieve lesson stats
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Lesson statistics
     */
    async getStats(params, signal) {
        const response = await this._apiClient.get(endpoints.GET_COURSE_STATS, { params, signal });
        return response.data;
    }
}

export const lessonApiService = new LessonApiService();
export default LessonApiService;
