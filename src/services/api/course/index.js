import apiConstants from "@/services/utils/constants";
import courseApiClient from "./config";

const endpoints = apiConstants.course;

/**
 * Handles Course-related API operations
 */
class CourseApiService {
    constructor(apiClient = courseApiClient) {
        this._apiClient = apiClient;
    }

    /**
     * Fetch course details
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Course details
     */
    async getDetails(dynamicRoute, params, signal) {
        const response = await this._apiClient.get(`/${dynamicRoute}`, { params, signal });
        return response.data;
    }

    /**
     * Retrieve course stats
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Course statistics
     */
    async getStats(params, signal) {
        const response = await this._apiClient.get(endpoints.GET_COURSE_STATS, { params, signal });
        return response.data;
    }

    async getList(params, signal) {
        const response = await this._apiClient.get("", { params, signal });
        return response.data;
    }
}

export const courseApiService = new CourseApiService();
export default CourseApiService;
