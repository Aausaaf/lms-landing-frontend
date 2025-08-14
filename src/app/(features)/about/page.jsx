"use client";
import { useState, useEffect } from "react";
import HeroBanner from "./components/HeroBanner";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import CompanyStats from "./components/CompanyStats";
import OurTeam from "./components/OurTeam";
import OurJourney from "./components/OurJourney";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import CompanyCulture from "./components/CompanyCulture";
import AwardsRecognition from "./components/AwardsRecognition";
import { Layout } from "@/app/layout/layout";

export default function AboutUsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Layout>
            <div
                className={`min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20 transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <HeroBanner />
                <OurStory />
                <CompanyStats />
                <OurValues />
                <VisionMission />
                <OurJourney />
                <OurTeam />
                <WhyChooseUs />
                <CompanyCulture />
                <AwardsRecognition />
            </div>
        </Layout>
    );
}
