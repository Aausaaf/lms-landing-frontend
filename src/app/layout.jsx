import { Public_Sans } from "next/font/google";
import "./globals.css";
import ContextProviders from "@/services/context";
import { ToastInitializer, ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "./providers/theme-provider";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public-sans",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//     title: "My App",
//     description: "The best app ever.",
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${publicSans.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <ContextProviders>
                        <ToastProvider>
                            <ToastInitializer />
                            {children}
                        </ToastProvider>
                    </ContextProviders>
                </ThemeProvider>
            </body>
        </html>
    );
}
