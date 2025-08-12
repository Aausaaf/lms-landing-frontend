import { videoApiService } from "@/services/api/video";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to fetch Video details
 */
export const useVideoGetDetails = () => {
    const [details, setDetails] = useState(undefined);
    const { showErrorNotification, errorMessages, successMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_VIDEO_DETAILS_KEY = apiConstants.loadingStateKeys.GET_VIDEO_DETAILS;

    const fetchDetails = useCallback(
        async ({ dynamicRoute, onSuccess, onError, params }) => {
            setLoading(GET_VIDEO_DETAILS_KEY, true);
            const controller = new AbortController();

            try {
                let data = await videoApiService.getDetails(dynamicRoute, params, controller.signal);
                data = {
                    ...data,
                    data: {
                        ...data.data,
                        instructorIds: data?.data?.instructors?.map((item) => item.id?.toString()) || [],
                    },
                };
                setDetails(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_VIDEO_DETAILS_KEY,
                    value: error?.message || "Failed to fetch video details",
                });
                onError?.(error);
            } finally {
                setLoading(GET_VIDEO_DETAILS_KEY, false);
            }
        },
        [GET_VIDEO_DETAILS_KEY, showErrorNotification, setLoading]
    );

    return {
        lectureDetails: {
            data: details,
            fetch: fetchDetails,
            isLoading: isLoading(GET_VIDEO_DETAILS_KEY),
            success: successMessages?.[GET_VIDEO_DETAILS_KEY],
            error: errorMessages?.[GET_VIDEO_DETAILS_KEY],
        },
    };
};

/**
 * Custom hook to fetch Video statistics
 */
export const useVideoGetStats = () => {
    const [stats, setStats] = useState({});
    const { showErrorNotification } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_VIDEO_STATS_KEY = apiConstants.loadingStateKeys.GET_VIDEO_STATS;

    const fetchStats = useCallback(
        async ({ onSuccess, onError }, params) => {
            setLoading(GET_VIDEO_STATS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await videoApiService.getStats(params, controller.signal);
                setStats(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_VIDEO_STATS_KEY,
                    value: error?.message || "Failed to fetch video stats",
                });
                onError?.(error);
            } finally {
                setLoading(GET_VIDEO_STATS_KEY, false);
            }
        },
        [GET_VIDEO_STATS_KEY, showErrorNotification, setLoading]
    );

    return {
        videoStats: {
            data: stats,
            fetch: fetchStats,
            isLoading: isLoading(GET_VIDEO_STATS_KEY),
        },
    };
};
