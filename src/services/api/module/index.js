import apiConstants from "@/services/utils/constants";
import moduleApiClient from "./config";

const endpoints = apiConstants.module;

/**
 * Handles Module-related API operations
 */
class ModuleApiService {
    constructor(apiClient = moduleApiClient) {
        this._apiClient = apiClient;
    }

    /**
     * Fetch module details
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Module details
     */
    async getDetails(dynamicRoute, params, signal) {
        const response = await this._apiClient.get(`${dynamicRoute}`, { params, signal });
        return response.data;
    }

    /**
     * Retrieve module stats
     * @param {Object} [params] - Query params
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Module statistics
     */
    async getStats(params, signal) {
        const response = await this._apiClient.get(endpoints.GET_MODULE_STATS, { params, signal });
        return response.data;
    }
}

export const moduleApiService = new ModuleApiService();
export default ModuleApiService;
