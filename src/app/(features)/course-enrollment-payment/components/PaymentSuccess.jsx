import React, { useEffect } from "react";
import Icon from "./AppIcon";
import { useNavigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

const PaymentSuccess = ({ course, transactionId, onClose }) => {
    const { navigate } = useNavigation();

    useEffect(() => {
        // Auto redirect after 10 seconds
        const timer = setTimeout(() => {
            navigate("/course-details");
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const handleDownloadReceipt = () => {
        // Mock receipt download
        const receiptData = {
            transactionId,
            course: course.title,
            amount: course.finalPrice,
            date: new Date().toLocaleDateString("en-IN"),
            gst: Math.round(course.finalPrice * 0.18),
        };

        console.log("Downloading receipt:", receiptData);
        // In real app, this would generate and download a PDF
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card border border-border rounded-lg max-w-md w-full p-8 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-success" />
                </div>

                <h2 className="font-heading font-bold text-xl text-foreground mb-2">Payment Successful!</h2>

                <p className="text-muted-foreground mb-6">Congratulations! You have successfully enrolled in the course.</p>

                <div className="bg-muted/30 rounded-lg p-4 mb-6 text-left">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Transaction ID:</span>
                            <span className="font-mono text-foreground">{transactionId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Course:</span>
                            <span className="text-foreground font-medium">{course.title}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Amount Paid:</span>
                            <span className="text-foreground font-semibold">₹{course.finalPrice.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Date:</span>
                            <span className="text-foreground">{new Date().toLocaleDateString("en-IN")}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <Button variant="default" fullWidth iconName="Play" iconPosition="left" onClick={() => navigate("/course-details")}>
                        Start Learning Now
                    </Button>

                    <Button variant="outline" fullWidth iconName="Download" iconPosition="left" onClick={handleDownloadReceipt}>
                        Download Receipt
                    </Button>
                </div>

                <div className="mt-6 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                        <Icon name="Mail" size={14} />
                        <span>Course access details sent to your email</span>
                    </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">Redirecting to course dashboard in 10 seconds...</div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
