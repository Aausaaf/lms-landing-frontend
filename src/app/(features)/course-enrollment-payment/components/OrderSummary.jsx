import React, { useState } from "react";
import Icon from "./AppIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OrderSummary = ({ course, paymentMethod, onCouponApply }) => {
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState("");

    const mockCoupons = {
        FIRST50: { discount: 50, type: "fixed", description: "First time user discount" },
        SAVE20: { discount: 20, type: "percentage", description: "20% off on all courses" },
        STUDENT10: { discount: 10, type: "percentage", description: "Student discount" },
    };

    const basePrice = course.finalPrice;
    const gst = Math.round(basePrice * 0.18);
    const couponDiscount = appliedCoupon ? (appliedCoupon.type === "fixed" ? appliedCoupon.discount : Math.round(basePrice * (appliedCoupon.discount / 100))) : 0;
    const finalAmount = basePrice + gst - couponDiscount;

    const handleCouponApply = () => {
        const coupon = mockCoupons[couponCode.toUpperCase()];
        if (coupon) {
            setAppliedCoupon({ ...coupon, code: couponCode.toUpperCase() });
            setCouponError("");
            onCouponApply && onCouponApply(coupon);
        } else {
            setCouponError("Invalid coupon code");
            setAppliedCoupon(null);
        }
    };

    const handleCouponRemove = () => {
        setAppliedCoupon(null);
        setCouponCode("");
        setCouponError("");
    };

    return (
        <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Order Summary</h3>

            {/* Course Details */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <h4 className="font-body font-medium text-foreground text-sm line-clamp-2">{course.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">by {course.instructor.name}</p>
                    </div>
                    <div className="text-right ml-3">
                        <div className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString("en-IN")}</div>
                        <div className="font-body font-medium text-foreground">₹{basePrice.toLocaleString("en-IN")}</div>
                    </div>
                </div>
            </div>

            {/* Coupon Section */}
            <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Tag" size={16} className="text-primary" />
                    <span className="font-body font-medium text-foreground text-sm">Apply Coupon</span>
                </div>

                {!appliedCoupon ? (
                    <div className="flex space-x-2">
                        <Input type="text" placeholder="Enter coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value.toUpperCase())} error={couponError} className="flex-1" />
                        <Button variant="outline" size="sm" onClick={handleCouponApply} disabled={!couponCode.trim()}>
                            Apply
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <div>
                                <div className="text-sm font-body font-medium text-success">{appliedCoupon.code}</div>
                                <div className="text-xs text-success/80">{appliedCoupon.description}</div>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleCouponRemove} iconName="X" />
                    </div>
                )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Course Price</span>
                    <span className="text-sm text-foreground">₹{basePrice.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">GST (18%)</span>
                    <span className="text-sm text-foreground">₹{gst.toLocaleString("en-IN")}</span>
                </div>

                {appliedCoupon && (
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-success">Coupon Discount</span>
                        <span className="text-sm text-success">-₹{couponDiscount.toLocaleString("en-IN")}</span>
                    </div>
                )}

                <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                        <span className="font-body font-semibold text-foreground">Total Amount</span>
                        <span className="font-heading font-bold text-lg text-foreground">₹{finalAmount.toLocaleString("en-IN")}</span>
                    </div>
                </div>
            </div>

            {/* Payment Method Info */}
            {paymentMethod === "emi" && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                        <Icon name="Calendar" size={14} className="text-primary" />
                        <span className="text-sm font-body font-medium text-primary">EMI Selected</span>
                    </div>
                    <div className="text-xs text-primary/80">Monthly installments starting from ₹{Math.ceil(finalAmount / 6).toLocaleString("en-IN")}</div>
                </div>
            )}

            {/* Benefits */}
            <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span>Lifetime access to course content</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span>Mobile and desktop access</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
