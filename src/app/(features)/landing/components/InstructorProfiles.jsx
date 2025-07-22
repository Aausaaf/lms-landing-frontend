import { useNavigation } from "@/components/navigation";
import { instructorsData } from "../constants/data";

export default function InstructorProfiles() {
    const { navigate } = useNavigation();
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{instructorsData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{instructorsData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instructorsData.instructors.map((instructor) => (
                        <div key={instructor.id} className="bg-white rounded-2xl  border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:scale-105">
                            <div className="relative mb-6">
                                <img src={instructor.image || "/placeholder.svg"} alt={instructor.name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg" />
                                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                            <p className="text-blue-600 font-medium mb-2">{instructor.specialization}</p>
                            <p className="text-gray-600 text-sm mb-6">{instructor.education}</p>

                            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">{instructor.stats.students}</div>
                                    <div className="text-xs text-gray-500">Students Taught</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-600">{instructor.stats.successRate}</div>
                                    <div className="text-xs text-gray-500">Success Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-600">{instructor.stats.rating}</div>
                                    <div className="text-xs text-gray-500">Rating</div>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm text-gray-600 mb-6">
                                {instructor.expertise.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate("/instructor-profiles")}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Instructors */}
                <div className="text-center mt-12">
                    <button className="bg-white text-blue-600 border-2 border-blue-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">Meet All 200+ Instructors</button>
                </div>
            </div>
        </section>
    );
}
