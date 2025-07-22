"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./AppIcon";

const Breadcrumb = () => {
    const pathname = usePathname();

    const pathMap = {
        "/course-details": { label: "Course Details", parent: null },
        "/course-curriculum-browser": { label: "Curriculum Browser", parent: "/course-details" },
        "/instructor-profiles": { label: "Instructors", parent: null },
        "/student-reviews-testimonials": { label: "Reviews", parent: null },
        "/course-enrollment-payment": { label: "Enrollment", parent: "/course-details" },
        "/user-authentication": { label: "Account", parent: null },
    };

    const currentPath = pathname;
    const currentPage = pathMap[currentPath];

    if (!currentPage) return null;

    const breadcrumbItems = [];

    // Add home
    breadcrumbItems.push({ label: "Home", path: "/" });

    // Add parent if exists
    if (currentPage.parent) {
        const parentPage = pathMap[currentPage.parent];
        if (parentPage) {
            breadcrumbItems.push({ label: parentPage.label, path: currentPage.parent });
        }
    }

    // Add current page
    breadcrumbItems.push({ label: currentPage.label, path: currentPath, current: true });

    return (
        <nav className="flex items-center space-x-2 text-sm font-body mb-6" aria-label="Breadcrumb">
            {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.path}>
                    {index > 0 && <Icon name="ChevronRight" size={14} className="text-muted-foreground" />}
                    {item.current ? (
                        <span className="text-foreground font-medium" aria-current="page">
                            {item.label}
                        </span>
                    ) : (
                        <Link href={item.path} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            {item.label}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
