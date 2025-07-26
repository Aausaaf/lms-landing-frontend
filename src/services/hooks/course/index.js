import { courseApiService } from "@/services/api/course";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to fetch Course details
 */
export const useCourseGetDetails = () => {
    const [details, setDetails] = useState({});
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_COURSE_DETAILS_KEY = apiConstants.loadingStateKeys.GET_COURSE_DETAILS;

    const fetchDetails = useCallback(
        async ({ dynamicRoute, onSuccess, onError, params, isLoading = true }) => {
            isLoading && setLoading(GET_COURSE_DETAILS_KEY, true);
            const controller = new AbortController();

            try {
                let data = await courseApiService.getDetails(dynamicRoute, params, controller.signal);

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
                    key: GET_COURSE_DETAILS_KEY,
                    value: error || "Failed to fetch course details",
                });
                onError?.(error);
            } finally {
                setLoading(GET_COURSE_DETAILS_KEY, false);
            }
        },
        [GET_COURSE_DETAILS_KEY, showErrorNotification, setLoading]
    );

    return {
        courseDetails: {
            data: details,
            fetch: fetchDetails,
            isLoading: isLoading(GET_COURSE_DETAILS_KEY),
            success: successMessages?.[GET_COURSE_DETAILS_KEY],
            error: errorMessages?.[GET_COURSE_DETAILS_KEY],
        },
    };
};

/**
 * Custom hook to fetch Course statistics
 */
export const useCourseGetStats = () => {
    const [stats, setStats] = useState({});
    const { showErrorNotification } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_COURSE_STATS_KEY = apiConstants.loadingStateKeys.GET_COURSE_STATS;

    const fetchStats = useCallback(
        async ({ onSuccess, onError }, params) => {
            setLoading(GET_COURSE_STATS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await courseApiService.getStats(params, controller.signal);
                setStats(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_COURSE_STATS_KEY,
                    value: error?.message || "Failed to fetch course stats",
                });
                onError?.(error);
            } finally {
                setLoading(GET_COURSE_STATS_KEY, false);
            }
        },
        [GET_COURSE_STATS_KEY, showErrorNotification, setLoading]
    );

    return {
        courseStats: {
            data: stats,
            fetch: fetchStats,
            isLoading: isLoading(GET_COURSE_STATS_KEY),
        },
    };
};

export const useCourseGetList = () => {
    const [list, setList] = useState({});
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const GET_COURSE_LIST_KEY = apiConstants.loadingStateKeys.GET_COURSE_LIST;

    const fetchList = useCallback(
        async ({ onSuccess, onError, params }) => {
            setLoading(GET_COURSE_LIST_KEY, true);
            const controller = new AbortController();

            try {
                const data = await courseApiService.getList(params, controller.signal);
                setList(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: GET_COURSE_LIST_KEY,
                    value: error || "Failed to fetch course list",
                });
                onError?.(error);
            } finally {
                setLoading(GET_COURSE_LIST_KEY, false);
            }
        },
        [GET_COURSE_LIST_KEY, showErrorNotification, setLoading]
    );

    return {
        courseList: {
            data: list,
            fetch: fetchList,
            isLoading: isLoading(GET_COURSE_LIST_KEY),
            success: successMessages[GET_COURSE_LIST_KEY],
            error: errorMessages[GET_COURSE_LIST_KEY],
        },
    };
};
