import React, { useState } from "react";
import Icon from "./AppIcon";

const CourseFAQ = ({ faqs }) => {
    const [expandedFAQ, setExpandedFAQ] = useState(new Set([0]));

    const toggleFAQ = (index) => {
        const newExpanded = new Set(expandedFAQ);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedFAQ(newExpanded);
    };

    return (
        <section id="faq" className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Get answers to common questions about this course</p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                                <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                                    <h3 className="font-medium text-foreground pr-4">{faq.question}</h3>
                                    <Icon name={expandedFAQ.has(index) ? "Minus" : "Plus"} size={20} className="text-muted-foreground flex-shrink-0" />
                                </button>
                                {expandedFAQ.has(index) && (
                                    <div className="px-6 pb-4 border-t border-border">
                                        <div className="pt-4 text-muted-foreground leading-relaxed">{faq.answer}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Support */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 text-center">
                        <Icon name="HelpCircle" size={32} className="text-primary mx-auto mb-3" />
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Still Have Questions?</h3>
                        <p className="text-muted-foreground mb-4">Our support team is here to help you with any questions about the course</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a href="mailto:support@educourse.com" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                                <Icon name="Mail" size={16} />
                                <span>support@educourse.com</span>
                            </a>
                            <div className="hidden sm:block text-muted-foreground">•</div>
                            <a href="tel:+911234567890" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                                <Icon name="Phone" size={16} />
                                <span>+91 12345 67890</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseFAQ;
