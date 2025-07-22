import React from "react";
import Icon from "./AppIcon";

const ProgressIndicator = ({ currentStep = 2 }) => {
    const steps = [
        { id: 1, title: "Course Selection", icon: "BookOpen" },
        { id: 2, title: "Payment Details", icon: "CreditCard" },
        { id: 3, title: "Confirmation", icon: "CheckCircle" },
    ];

    return (
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex items-center space-x-3">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                    step.id < currentStep ? "bg-success text-white" : step.id === currentStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                                }`}
                            >
                                {step.id < currentStep ? <Icon name="Check" size={16} /> : <Icon name={step.icon} size={16} />}
                            </div>

                            <div className="hidden sm:block">
                                <div className={`font-body font-medium text-sm ${step.id <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step.title}</div>
                                <div className="text-xs text-muted-foreground">
                                    Step {step.id} of {steps.length}
                                </div>
                            </div>
                        </div>

                        {index < steps.length - 1 && <div className={`flex-1 h-0.5 mx-4 transition-colors duration-200 ${step.id < currentStep ? "bg-success" : "bg-border"}`} />}
                    </React.Fragment>
                ))}
            </div>

            {/* Mobile Step Indicator */}
            <div className="sm:hidden mt-4 text-center">
                <div className="font-body font-medium text-foreground">{steps.find((s) => s.id === currentStep)?.title}</div>
                <div className="text-xs text-muted-foreground">
                    Step {currentStep} of {steps.length}
                </div>
            </div>
        </div>
    );
};

export default ProgressIndicator;
