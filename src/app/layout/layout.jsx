import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children, skipFooter, fullWidth }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar fullWidth={fullWidth} />
            <main className="flex-1">{children}</main>
            {!skipFooter && <Footer />}
        </div>
    );
}
