"use client";

import { createContext, useContext } from "react";
import { useCourseGetDetails, useCourseGetList, useCourseGetStats } from "../hooks/course";

const CourseContext = createContext(null);

export const CourseProvider = ({ children, initialData = { courseList: [] } }) => {
    const useCourseListState = useCourseGetList();
    const useCourseGetDetailsState = useCourseGetDetails();
    const useCourseGetStatsState = useCourseGetStats();

    return (
        <CourseContext.Provider
            value={{
                ...useCourseGetDetailsState,
                ...useCourseListState,
                ...useCourseGetStatsState,
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    const context = useContext(CourseContext);
    if (context === null) {
        throw new Error("useCourse must be used within a CourseProvider");
    }
    return context;
};
