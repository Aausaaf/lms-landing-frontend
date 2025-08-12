"use client";
import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCourse } from "@/services/context/course";

export default function CoursePagination() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { courseList } = useCourse();

    // Get current page from URL with fallback
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    // Calculate total pages from API response
    const { totalPages, totalRecords } = useMemo(() => {
        const data = courseList.data?.data?.pagination;
        const total = data?.totalDocuments || 0;
        const pages = data?.totalPages;

        return {
            totalPages: pages,
            totalRecords: total,
        };
    }, [courseList.data?.data]);

    // Update URL parameters for pagination
    const updatePage = useCallback(
        (newPage) => {
            const params = new URLSearchParams(searchParams.toString());

            if (newPage > 1) {
                params.set("page", newPage.toString());
            } else {
                params.delete("page");
            }

            const newUrl = params.toString() ? `?${params.toString()}` : "";
            router.push(newUrl, { scroll: false });
        },
        [searchParams, router]
    );

    // Generate page numbers to display
    const pageNumbers = useMemo(() => {
        const pages = [];
        const showPages = 5; // Number of page buttons to show
        const halfShow = Math.floor(showPages / 2);

        let startPage = Math.max(1, currentPage - halfShow);
        let endPage = Math.min(totalPages, currentPage + halfShow);

        // Adjust if we're near the beginning or end
        if (endPage - startPage + 1 < showPages) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + showPages - 1);
            } else {
                startPage = Math.max(1, endPage - showPages + 1);
            }
        }

        // Add first page and ellipsis if needed
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push("...");
            }
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push("...");
            }
            pages.push(totalPages);
        }

        return pages;
    }, [currentPage, totalPages]);

    // Don't render pagination if there's only one page or no data
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav className="mt-12 flex items-center justify-center space-x-4" aria-label="Course pagination navigation">
            {/* Previous Button */}
            <button
                onClick={() => updatePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Go to previous page"
            >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-2" role="list">
                {pageNumbers.map((page, index) => (
                    <button
                        key={`${page}-${index}`}
                        onClick={() => (typeof page === "number" ? updatePage(page) : null)}
                        disabled={page === "..." || page === currentPage}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                            page === currentPage ? "bg-orange-600 text-white shadow-sm" : page === "..." ? "cursor-default text-gray-400" : "border border-gray-300 hover:bg-gray-50 text-gray-700"
                        }`}
                        aria-label={page === currentPage ? `Current page, page ${page}` : typeof page === "number" ? `Go to page ${page}` : undefined}
                        aria-current={page === currentPage ? "page" : undefined}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => updatePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Go to next page"
            >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
            </button>

            {/* Page Info */}
            <div className="hidden sm:block text-sm text-gray-500 ml-4">
                Page {currentPage} of {totalPages}
            </div>
        </nav>
    );
}
