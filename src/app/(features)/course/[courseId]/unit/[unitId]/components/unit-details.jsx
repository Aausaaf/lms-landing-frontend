"use client";

import { memo, useEffect } from "react";
import { CourseSidebar } from "../../../components/course-sidebar";
import { useParams } from "next/navigation";
import UnitContent from "./unit-content";
import { useModule } from "@/services/context/module";
import LoadingWrapper from "@/components/ContainerWithLoading";

/**
 * Enhanced unit details component with improved performance and dark mode
 */
export const UnitDetails = memo(() => {
    const { courseId, unitId } = useParams();
    const { unitDetails } = useModule();

    useEffect(() => {
        unitDetails.fetch({ dynamicRoute: `/${courseId}/module/${unitId}` });
    }, [courseId, unitId]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex">
                {/* Course navigation sidebar */}
                <CourseSidebar courseId={courseId} activeUnitId={unitId} />

                {/* Main unit content */}
                <main className="flex-1 lg:ml-80">
                    <LoadingWrapper
                        loadingText={"Loading Unit Details"}
                        isLoading={unitDetails.isLoading}
                        data={{ data: unitDetails.data, message: "Unit details Not Found" }}
                        message={unitDetails.success || unitDetails.error}
                        loadingClassName="mt-6"
                        className={"w-full"}
                    >
                        <UnitContent />
                    </LoadingWrapper>
                </main>
            </div>
        </div>
    );
});

UnitDetails.displayName = "UnitDetails";
