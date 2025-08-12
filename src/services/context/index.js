import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { CourseProvider } from "./course";
import { UsersProvider } from "./users";
import { ThemeProvider } from "./theme";
import { AuthProvider } from "./auth";
import { ModuleProvider } from "./module";
import { LessonProvider } from "./lesson";
import { VideoProvider } from "./video";

const ContextProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <LoadingProvider>
                <NotificationProvider>
                    <AuthProvider>
                        <UsersProvider>
                            <CourseProvider>
                                <ModuleProvider>
                                    <LessonProvider>
                                        <VideoProvider>{children}</VideoProvider>
                                    </LessonProvider>
                                </ModuleProvider>
                            </CourseProvider>
                        </UsersProvider>
                    </AuthProvider>
                </NotificationProvider>
            </LoadingProvider>
        </ThemeProvider>
    );
};
export default ContextProviders;
