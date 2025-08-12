"use client";

import { createContext, useContext } from "react";
import { useVideoGetDetails, useVideoGetStats } from "../hooks/video";

const VideoContext = createContext(null);

export const VideoProvider = ({ children, initialData = { videoList: [] } }) => {
    const useVideoGetDetailsState = useVideoGetDetails();
    const useVideoGetStatsState = useVideoGetStats();

    return (
        <VideoContext.Provider
            value={{
                ...useVideoGetDetailsState,
                ...useVideoGetStatsState,
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (context === null) {
        throw new Error("useVideo must be used within a VideoProvider");
    }
    return context;
};
