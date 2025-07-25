import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children, skipFooter }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-1">{children}</main>
            {!skipFooter && <Footer />}
        </div>
    );
}
