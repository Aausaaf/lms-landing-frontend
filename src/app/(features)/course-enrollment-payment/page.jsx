"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "./components/Breadcrumb";
import CourseCard from "./components/CourseCard";
import PaymentOptions from "./components/PaymentOptions";
import PaymentForm from "./components/PaymentForm";
import OrderSummary from "./components/OrderSummary";
import ProgressIndicator from "./components/ProgressIndicator";
import PaymentSuccess from "./components/PaymentSuccess";
import Icon from "./components/AppIcon";
import { useNavigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Layout } from "@/app/layout/layout";

const CourseEnrollmentPayment = () => {
    const { navigate } = useNavigation();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("full");
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    // Mock course data
    const courseData = {
        id: "react-advanced-2024",
        title: "Complete React Development Bootcamp - From Beginner to Advanced",
        instructor: {
            name: "Dr. Priya Sharma",
            avatar: "",
        },
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        originalPrice: 4999,
        finalPrice: 2999,
        discount: 40,
        duration: "12 hours",
        students: "2,500+",
        rating: 4.8,
    };

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
    }, []);

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handlePaymentSubmit = async (formData) => {
        setIsProcessing(true);

        try {
            // Mock payment processing
            await new Promise((resolve) => setTimeout(resolve, 3000));

            // Generate mock transaction ID
            const mockTransactionId = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;
            setTransactionId(mockTransactionId);
            setShowSuccess(true);
        } catch (error) {
            console.error("Payment failed:", error);
            // Handle payment failure
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCouponApply = (coupon) => {
        console.log("Coupon applied:", coupon);
    };

    const handleBackToCourse = () => {
        navigate("/course-details");
    };

    return (
        <Layout>
            <div className="min-h-screen bg-background pb-24">
                <main className="">
                    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Breadcrumb />

                        {/* Back Button */}
                        <div className="mb-6">
                            <Button variant="ghost" icon="ArrowLeft" iconPosition="left" onClick={handleBackToCourse}>
                                Back to Course Details
                            </Button>
                        </div>

                        <ProgressIndicator currentStep={2} />

                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Complete Your Enrollment</h1>
                            <p className="text-muted-foreground">You're just one step away from starting your learning journey</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Course Summary */}
                                <CourseCard course={courseData} />

                                {/* Payment Options */}
                                <PaymentOptions selectedOption={selectedPaymentMethod} onOptionChange={handlePaymentMethodChange} course={courseData} />

                                {/* Payment Form */}
                                <PaymentForm paymentMethod={selectedPaymentMethod} onSubmit={handlePaymentSubmit} isProcessing={isProcessing} />
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <OrderSummary course={courseData} paymentMethod={selectedPaymentMethod} onCouponApply={handleCouponApply} />
                            </div>
                        </div>

                        {/* Support Section */}
                        <div className="mt-12 bg-card border border-border rounded-lg p-6">
                            <div className="text-center">
                                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Need Help?</h3>
                                <p className="text-muted-foreground mb-4">Our support team is here to assist you with any questions</p>

                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Icon name="Phone" size={16} />
                                        <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Icon name="Mail" size={16} />
                                        <span>support@educourse.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Icon name="MessageCircle" size={16} />
                                        <span>Live Chat Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: "Shield", text: "Secure Payment" },
                                { icon: "RefreshCw", text: "30-Day Refund" },
                                { icon: "Award", text: "Certified Course" },
                                { icon: "Users", text: "2500+ Students" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 p-3 bg-card border border-border rounded-lg">
                                    <Icon name={item.icon} size={16} className="text-primary" />
                                    <span className="text-sm font-body font-medium text-foreground">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Payment Success Modal */}
                {showSuccess && <PaymentSuccess course={courseData} transactionId={transactionId} onClose={() => setShowSuccess(false)} />}

                {/* Processing Overlay */}
                {isProcessing && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
                        <div className="bg-card border border-border rounded-lg p-8 text-center">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Processing Payment</h3>
                            <p className="text-muted-foreground">Please wait while we process your payment securely...</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CourseEnrollmentPayment;
