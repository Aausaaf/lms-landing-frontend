import { useNavigation } from "@/components/navigation";
import { categoriesData } from "../constants/data";

export default function CategoriesShowcase() {
    const { navigate } = useNavigation();
    const getColorClasses = (color) => {
        const colors = {
            primary: "bg-orange-50 text-orange-600 hover:bg-orange-100",
            accent: "bg-red-50 text-red-600 hover:bg-red-100",
            secondary: "bg-green-50 text-green-600 hover:bg-green-100",
            warning: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
        };
        return colors[color] || colors.primary;
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{categoriesData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{categoriesData.subtitle}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categoriesData.categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-2xl border  border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:scale-105">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${getColorClasses(category.color)}`}>
                                <span className="text-3xl">{category.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                            <p className="text-gray-600 mb-4">{category.description}</p>
                            <div className="text-sm text-orange-600 font-medium mb-6">{category.enrolled} enrolled</div>
                            <button
                                onClick={() => navigate("/course-list")}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
                            >
                                Explore Courses
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
