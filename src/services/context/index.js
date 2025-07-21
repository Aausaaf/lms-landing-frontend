import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { CourseProvider } from "./course";
import { UsersProvider } from "./users";
import { ThemeProvider } from "./theme";
import { AuthProvider } from "./auth";

const ContextProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <LoadingProvider>
                <NotificationProvider>
                    <AuthProvider>
                        <UsersProvider>
                            <CourseProvider>{children}</CourseProvider>
                        </UsersProvider>
                    </AuthProvider>
                </NotificationProvider>
            </LoadingProvider>
        </ThemeProvider>
    );
};
export default ContextProviders;
