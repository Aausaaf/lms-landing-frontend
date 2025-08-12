"use client";

import { createContext, useContext } from "react";
import { useModuleGetDetails, useModuleGetStats } from "../hooks/module";

const ModuleContext = createContext(null);

export const ModuleProvider = ({ children, initialData = { moduleList: [] } }) => {
    const useModuleGetDetailsState = useModuleGetDetails();
    const useModuleGetStatsState = useModuleGetStats();

    return (
        <ModuleContext.Provider
            value={{
                ...useModuleGetDetailsState,
                ...useModuleGetStatsState,
            }}
        >
            {children}
        </ModuleContext.Provider>
    );
};

export const useModule = () => {
    const context = useContext(ModuleContext);
    if (context === null) {
        throw new Error("useModule must be used within a ModuleProvider");
    }
    return context;
};
