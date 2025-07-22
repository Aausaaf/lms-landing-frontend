/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                border: "var(--color-border)" /* gray-200 */,
                input: "var(--color-input)" /* white */,
                ring: "var(--color-ring)" /* blue-600 */,
                background: "var(--color-background)" /* gray-50 */,
                foreground: "var(--color-foreground)" /* gray-900 */,
                primary: {
                    DEFAULT: "var(--color-primary)" /* blue-600 */,
                    foreground: "var(--color-primary-foreground)" /* white */,
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)" /* emerald-600 */,
                    foreground: "var(--color-secondary-foreground)" /* white */,
                },
                destructive: {
                    DEFAULT: "var(--color-destructive)" /* red-600 */,
                    foreground: "var(--color-destructive-foreground)" /* white */,
                },
                muted: {
                    DEFAULT: "var(--color-muted)" /* gray-100 */,
                    foreground: "var(--color-muted-foreground)" /* gray-500 */,
                },
                accent: {
                    DEFAULT: "var(--color-accent)" /* red-600 */,
                    foreground: "var(--color-accent-foreground)" /* white */,
                },
                popover: {
                    DEFAULT: "var(--color-popover)" /* white */,
                    foreground: "var(--color-popover-foreground)" /* gray-900 */,
                },
                card: {
                    DEFAULT: "var(--color-card)" /* white */,
                    foreground: "var(--color-card-foreground)" /* gray-900 */,
                },
                success: {
                    DEFAULT: "var(--color-success)" /* emerald-500 */,
                    foreground: "var(--color-success-foreground)" /* white */,
                },
                warning: {
                    DEFAULT: "var(--color-warning)" /* amber-500 */,
                    foreground: "var(--color-warning-foreground)" /* white */,
                },
                error: {
                    DEFAULT: "var(--color-error)" /* red-500 */,
                    foreground: "var(--color-error-foreground)" /* white */,
                },
                // border: "hsl(var(--border))",
                // input: "hsl(var(--input))",
                // ring: "hsl(var(--ring))",
                // background: "hsl(var(--background))",
                // foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#ff6900",
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                    950: "#431407",
                    foreground: "var(--color-error-foreground)",
                },
                // orange: {
                //     DEFAULT: "#f97316",
                //     50: "#fff7ed",
                //     100: "#ffedd5",
                //     200: "#fed7aa",
                //     300: "#fdba74",
                //     400: "#fb923c",
                //     500: "#f97316",
                //     600: "#ea580c",
                //     700: "#c2410c",
                //     800: "#9a3412",
                //     900: "#7c2d12",
                //     950: "#431407",
                // },
                // secondary: {
                //     DEFAULT: "hsl(var(--secondary))",
                //     foreground: "hsl(var(--secondary-foreground))",
                // },
                // destructive: {
                //     DEFAULT: "hsl(var(--destructive))",
                //     foreground: "hsl(var(--destructive-foreground))",
                // },
                // muted: {
                //     DEFAULT: "hsl(var(--muted))",
                //     foreground: "hsl(var(--muted-foreground))",
                // },
                // accent: {
                //     DEFAULT: "hsl(var(--accent))",
                //     foreground: "hsl(var(--accent-foreground))",
                // },
                // popover: {
                //     DEFAULT: "hsl(var(--popover))",
                //     foreground: "hsl(var(--popover-foreground))",
                // },
                // card: {
                //     DEFAULT: "hsl(var(--card))",
                //     foreground: "hsl(var(--card-foreground))",
                // },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                shimmer: {
                    "100%": {
                        transform: "translateX(100%)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 2s infinite",
            },
            boxShadow: {
                glow: "0 0 20px rgba(217, 57, 0, 0.35)",
            },
            backgroundOpacity: {
                5: "0.05",
                10: "0.1",
                20: "0.2",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
