"use client";

import { createContext, useContext } from "react";
import { useLessonGetDetails, useLessonGetStats } from "../hooks/lesson";

const LessonContext = createContext(null);

export const LessonProvider = ({ children, initialData = { lessonList: [] } }) => {
    const useLessonGetDetailsState = useLessonGetDetails();
    const useLessonGetStatsState = useLessonGetStats();

    return (
        <LessonContext.Provider
            value={{
                ...useLessonGetDetailsState,
                ...useLessonGetStatsState,
            }}
        >
            {children}
        </LessonContext.Provider>
    );
};

export const useLesson = () => {
    const context = useContext(LessonContext);
    if (context === null) {
        throw new Error("useLesson must be used within a LessonProvider");
    }
    return context;
};
