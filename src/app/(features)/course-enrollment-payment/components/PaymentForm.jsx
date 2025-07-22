import React, { useState } from "react";
import Icon from "./AppIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const PaymentForm = ({ paymentMethod, onSubmit, isProcessing }) => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardHolder: "",
        upiId: "",
        selectedBank: "",
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({});

    const bankOptions = [
        { value: "sbi", label: "State Bank of India" },
        { value: "hdfc", label: "HDFC Bank" },
        { value: "icici", label: "ICICI Bank" },
        { value: "axis", label: "Axis Bank" },
        { value: "kotak", label: "Kotak Mahindra Bank" },
        { value: "pnb", label: "Punjab National Bank" },
    ];

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "Please accept the terms and conditions";
        }

        if (paymentMethod === "full" || paymentMethod === "emi") {
            if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
            if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
            if (!formData.cvv) newErrors.cvv = "CVV is required";
            if (!formData.cardHolder) newErrors.cardHolder = "Cardholder name is required";
        }

        if (paymentMethod === "wallet") {
            if (!formData.upiId) newErrors.upiId = "UPI ID is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const renderCardForm = () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="CreditCard" size={20} className="text-primary" />
                <h4 className="font-body font-medium text-foreground">Card Details</h4>
            </div>

            <Input
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                error={errors.cardNumber}
                required
            />

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Expiry Date"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    error={errors.expiryDate}
                    required
                />
                <Input label="CVV" type="text" placeholder="123" value={formData.cvv} onChange={(e) => handleInputChange("cvv", e.target.value)} error={errors.cvv} required />
            </div>

            <Input
                label="Cardholder Name"
                type="text"
                placeholder="Enter name as on card"
                value={formData.cardHolder}
                onChange={(e) => handleInputChange("cardHolder", e.target.value)}
                error={errors.cardHolder}
                required
            />

            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Icon name="Shield" size={16} className="text-success" />
                <div className="text-sm text-muted-foreground">Your card details are encrypted and secure</div>
            </div>
        </div>
    );

    const renderUPIForm = () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" size={20} className="text-primary" />
                <h4 className="font-body font-medium text-foreground">UPI Payment</h4>
            </div>

            <Input
                label="UPI ID"
                type="text"
                placeholder="yourname@paytm"
                value={formData.upiId}
                onChange={(e) => handleInputChange("upiId", e.target.value)}
                error={errors.upiId}
                description="Enter your UPI ID or phone number"
                required
            />

            <div className="grid grid-cols-3 gap-3">
                {["GPay", "PhonePe", "Paytm"].map((app) => (
                    <Button key={app} variant="outline" size="sm" className="h-12">
                        {app}
                    </Button>
                ))}
            </div>
        </div>
    );

    const renderNetBankingForm = () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building" size={20} className="text-primary" />
                <h4 className="font-body font-medium text-foreground">Net Banking</h4>
            </div>

            <Select
                label="Select Your Bank"
                options={bankOptions}
                value={formData.selectedBank}
                onChange={(value) => handleInputChange("selectedBank", value)}
                placeholder="Choose your bank"
                searchable
                required
            />
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
                {(paymentMethod === "full" || paymentMethod === "emi") && renderCardForm()}
                {paymentMethod === "wallet" && renderUPIForm()}
                {paymentMethod === "netbanking" && renderNetBankingForm()}
            </div>

            <div className="space-y-4">
                <Checkbox
                    label="I agree to the Terms & Conditions and Privacy Policy"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                    error={errors.agreeTerms}
                    required
                />

                <Button className="w-full" type="submit" variant="default" size="lg" fullWidth loading={isProcessing} icon="Lock" iconPosition="left" disabled={!formData.agreeTerms}>
                    {isProcessing ? "Processing Payment..." : "Complete Payment"}
                </Button>

                <div className="text-center text-xs text-muted-foreground">By completing this payment, you agree to our refund policy</div>
            </div>
        </form>
    );
};

export default PaymentForm;
