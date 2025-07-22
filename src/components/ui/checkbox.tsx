"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import GlobalUtils from "@/lib/utils";

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "onChange" | "checked"> {
    label?: string;
    checked?: boolean;
    onChange?: (event: { target: { checked: boolean } }) => void;
    error?: string;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({ className, label, id, checked, onChange, error, ...props }, ref) => {
    // Always generate ID to avoid conditional hook usage
    const generatedId = React.useId();
    const checkboxId = id || (label ? `checkbox-${generatedId}` : undefined);

    // Handle checked change for Radix checkbox
    const handleCheckedChange = (checkedState: boolean) => {
        if (onChange) {
            onChange({ target: { checked: checkedState } });
        }
    };

    const checkboxElement = (
        <CheckboxPrimitive.Root
            ref={ref}
            id={checkboxId}
            checked={checked}
            onCheckedChange={handleCheckedChange}
            className={GlobalUtils.cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                error && "border-red-500 ring-red-500",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator className={GlobalUtils.cn("flex items-center justify-center text-current")}>
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );

    if (label) {
        return (
            <div className="space-y-1">
                <div className="flex items-center space-x-2">
                    {checkboxElement}
                    <label
                        htmlFor={checkboxId}
                        className={GlobalUtils.cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer", error && "text-red-600")}
                    >
                        {label}
                    </label>
                </div>
                {error && <p className="text-sm text-red-600 ml-6">{error}</p>}
            </div>
        );
    }

    return (
        <div>
            {checkboxElement}
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
    );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
