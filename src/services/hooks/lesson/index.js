import { lessonApiService } from "@/services/api/lesson";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to fetch Lesson details
 */
export const useLessonGetDetails = () => {
    const [details, setDetails] = useState(undefined);
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_LESSON_DETAILS_KEY = apiConstants.loadingStateKeys.GET_LESSON_DETAILS;

    const fetchDetails = useCallback(
        async ({ dynamicRoute, onSuccess, onError, params }) => {
            setLoading(GET_LESSON_DETAILS_KEY, true);
            const controller = new AbortController();

            try {
                let data = await lessonApiService.getDetails(dynamicRoute, params, controller.signal);
                data = {
                    ...data,
                    data: {
                        ...data.data,
                        prerequisites: data.data?.prerequisites?.prerequisites,
                        instructorIds: data?.data?.instructors?.map((item) => item.id?.toString()) || [],
                    },
                };
                setDetails(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_LESSON_DETAILS_KEY,
                    value: error?.message || "Failed to fetch lesson details",
                });
                onError?.(error);
            } finally {
                setLoading(GET_LESSON_DETAILS_KEY, false);
            }
        },
        [GET_LESSON_DETAILS_KEY, showErrorNotification, setLoading]
    );

    return {
        lessonDetails: {
            data: details,
            fetch: fetchDetails,
            isLoading: isLoading(GET_LESSON_DETAILS_KEY),
            success: successMessages?.[GET_LESSON_DETAILS_KEY],
            error: errorMessages?.[GET_LESSON_DETAILS_KEY],
        },
    };
};

/**
 * Custom hook to fetch Lesson statistics
 */
export const useLessonGetStats = () => {
    const [stats, setStats] = useState({});
    const { showErrorNotification } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_COURSE_STATS_KEY = apiConstants.loadingStateKeys.GET_COURSE_STATS;

    const fetchStats = useCallback(
        async ({ onSuccess, onError }, params) => {
            setLoading(GET_COURSE_STATS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await lessonApiService.getStats(params, controller.signal);
                setStats(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_COURSE_STATS_KEY,
                    value: error?.message || "Failed to fetch lesson stats",
                });
                onError?.(error);
            } finally {
                setLoading(GET_COURSE_STATS_KEY, false);
            }
        },
        [GET_COURSE_STATS_KEY, showErrorNotification, setLoading]
    );

    return {
        lessonStats: {
            data: stats,
            fetch: fetchStats,
            isLoading: isLoading(GET_COURSE_STATS_KEY),
        },
    };
};
