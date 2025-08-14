"use client";
import { useState } from "react";
import { faqData } from "../constants/data";

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="faq">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{faqData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{faqData.subtitle}</p>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqData.faqs.map((faq) => (
                            <div key={faq.id} className="bg-white shadow-sm dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <button
                                    className="w-full text-left p-6 focus:outline-none  dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => toggleFAQ(faq.id)}
                                    aria-expanded={openFAQ === faq.id}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${openFAQ === faq.id ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                {openFAQ === faq.id && (
                                    <div id={`faq-answer-${faq.id}`} className="px-6 pb-6">
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
