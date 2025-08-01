"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import GlobalUtils from "@/lib/utils";

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={GlobalUtils.cn(
            "peer bg-gray-200 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50  data-[state=checked]:bg-orange-500",
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={GlobalUtils.cn(
                "pointer-events-none block h-4 w-4 rounded-full bg-primary data-[state=checked]:bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )}
        />
    </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
