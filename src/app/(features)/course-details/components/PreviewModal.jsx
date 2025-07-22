import React, { useEffect } from "react";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";

const PreviewModal = ({ isOpen, onClose, lesson }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !lesson) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-card border border-border rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <div>
                        <h3 className="text-lg font-heading font-semibold text-foreground">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">Free Preview • {lesson.duration} minutes</p>
                    </div>
                    <Button variant="ghost" size="sm" iconName="X" onClick={onClose} className="hover:bg-muted" />
                </div>

                {/* Video Player */}
                <div className="relative bg-black aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <Icon name="Play" size={64} className="text-white/80 mx-auto" />
                            <div className="text-white/80">
                                <p className="text-lg font-medium">Video Preview</p>
                                <p className="text-sm">Sample lesson content would play here</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Controls Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Button variant="ghost" size="sm" iconName="Play" className="text-white hover:bg-white/20" />
                                <div className="text-white text-sm">0:00 / {lesson.duration}:00</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" iconName="Volume2" className="text-white hover:bg-white/20" />
                                <Button variant="ghost" size="sm" iconName="Maximize" className="text-white hover:bg-white/20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h4 className="font-medium text-foreground mb-2">About this lesson</h4>
                        <p className="text-muted-foreground text-sm">
                            This is a free preview lesson that gives you a taste of what you'll learn in the full course. The complete course includes detailed explanations, practical examples, and
                            hands-on exercises.
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                            Lesson {lesson.lessonNumber} of {lesson.totalLessons}
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button variant="outline" size="sm" iconName="Heart">
                                Save
                            </Button>
                            <Button variant="default" size="sm" iconName="ShoppingCart" iconPosition="left">
                                Enroll to Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;
