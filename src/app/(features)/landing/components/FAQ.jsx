"use client";
import { useState } from "react";
import { faqData } from "../constants/data";

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{faqData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{faqData.subtitle}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqData.faqs.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <button className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(faq.id)}>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transform transition-transform ${openFAQ === faq.id ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                {openFAQ === faq.id && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
