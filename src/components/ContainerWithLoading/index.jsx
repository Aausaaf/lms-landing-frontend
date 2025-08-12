import React from "react";
import { LoadingSpinner } from "../ui/loading-spinner";
import DataNotFound from "../DataNotFound";
import { EmptyState } from "../emptyState";

const LoadingWrapper = ({ isLoading, loadingSize, loadingClassName, data, loadingText, children, ...restProps }) => {
    if (isLoading) {
        return (
            <div className={loadingClassName}>
                <LoadingSpinner size={loadingSize || "lg"} text={loadingText} />
            </div>
        );
    }

    const isDataEmpty = !data?.data || (Array.isArray(data.data) && data.data.length === 0) || (typeof data.data === "object" && !Array.isArray(data.data) && Object.keys(data.data).length === 0);

    if (isDataEmpty) {
        const message = typeof data?.message === "string" ? data.message : JSON.stringify(data?.message);
        return <DataNotFound message={message} />;
    }

    return <div {...restProps}>{children}</div>;
};

export default LoadingWrapper;
