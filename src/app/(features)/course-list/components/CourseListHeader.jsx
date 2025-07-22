"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function CourseListHeader() {
    const [searchQuery, setSearchQuery] = useState("");

    const quickSearchTerms = ["GATE", "IAS", "JEE", "Class 12"];

    const handleQuickSearch = (term) => {
        setSearchQuery(term);
    };

    return (
        <section className="bg-gradient-to-br from-primary-50 to-orange-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Discover Your Perfect Course</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Browse our comprehensive collection of expert-designed courses and take your skills to the next level</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search courses by name, topic, or instructor..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-32 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg bg-white"
                        />
                        <button className="absolute right-2 top-2.5 bg-orange-600 text-white font-semibold py-2 px-8 rounded-xl hover:bg-orange-700 transition-colors">Search</button>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center items-center">
                        <span className="text-sm text-gray-500 font-medium">Popular searches:</span>
                        {quickSearchTerms.map((term) => (
                            <button
                                key={term}
                                onClick={() => handleQuickSearch(term)}
                                className="text-sm bg-white text-orange-600 px-4 py-1.5 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200 shadow-sm border border-orange-200"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
