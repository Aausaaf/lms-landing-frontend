import { moduleApiService } from "@/services/api/module";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to fetch Module details
 */
export const useModuleGetDetails = () => {
    const [details, setDetails] = useState(undefined);
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_MODULE_DETAILS_KEY = apiConstants.loadingStateKeys.GET_MODULE_DETAILS;

    const fetchDetails = useCallback(
        async ({ dynamicRoute, onSuccess, onError, params }) => {
            setLoading(GET_MODULE_DETAILS_KEY, true);
            const controller = new AbortController();

            try {
                let data = await moduleApiService.getDetails(dynamicRoute, params, controller.signal);
                data = {
                    ...data,
                    data: {
                        ...data.data,
                        prerequisites: data.data?.prerequisites?.prerequisites,
                        instructorIds: data?.data?.instructors?.map((item) => item.id?.toString()) || [],
                        categoryIds: data?.data?.categories?.map((item) => item.id?.toString()) || [],
                    },
                };
                setDetails(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_MODULE_DETAILS_KEY,
                    value: error || "Failed to fetch module details",
                });
                onError?.(error);
            } finally {
                setLoading(GET_MODULE_DETAILS_KEY, false);
            }
        },
        [GET_MODULE_DETAILS_KEY, showErrorNotification, setLoading]
    );

    return {
        unitDetails: {
            data: details,
            fetch: fetchDetails,
            isLoading: isLoading(GET_MODULE_DETAILS_KEY),
            success: successMessages?.[GET_MODULE_DETAILS_KEY],
            error: errorMessages?.[GET_MODULE_DETAILS_KEY],
        },
    };
};

/**
 * Custom hook to fetch Module statistics
 */
export const useModuleGetStats = () => {
    const [stats, setStats] = useState({});
    const { showErrorNotification } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_MODULE_STATS_KEY = apiConstants.loadingStateKeys.GET_MODULE_STATS;

    const fetchStats = useCallback(
        async ({ onSuccess, onError }, params) => {
            setLoading(GET_MODULE_STATS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await moduleApiService.getStats(params, controller.signal);
                setStats(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_MODULE_STATS_KEY,
                    value: error?.message || "Failed to fetch module stats",
                });
                onError?.(error);
            } finally {
                setLoading(GET_MODULE_STATS_KEY, false);
            }
        },
        [GET_MODULE_STATS_KEY, showErrorNotification, setLoading]
    );

    return {
        moduleStats: {
            data: stats,
            fetch: fetchStats,
            isLoading: isLoading(GET_MODULE_STATS_KEY),
        },
    };
};
