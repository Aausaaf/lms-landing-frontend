import { Shield, Zap, Globe, Code, Palette, Smartphone } from "lucide-react";
export const navigation = {
    main: [
        {
            name: "Products",
            href: "/products",
            hasDropdown: true,
            megaMenu: [
                {
                    category: "Development",
                    items: [
                        { name: "Web Development", href: "/products/web-dev", description: "Modern web applications", icon: Code },
                        { name: "Mobile Apps", href: "/products/mobile", description: "iOS & Android apps", icon: Smartphone },
                        { name: "API Services", href: "/products/api", description: "RESTful API solutions", icon: Globe },
                    ],
                },
                {
                    category: "Design",
                    items: [
                        { name: "UI/UX Design", href: "/products/design", description: "User interface design", icon: Palette },
                        { name: "Branding", href: "/products/branding", description: "Brand identity solutions", icon: Zap },
                        { name: "Consulting", href: "/products/consulting", description: "Design consultation", icon: Shield },
                    ],
                },
            ],
        },
        {
            name: "Solutions",
            href: "/solutions",
            hasDropdown: true,
            items: [
                { name: "Enterprise", href: "/solutions/enterprise", description: "Large-scale solutions" },
                { name: "Startups", href: "/solutions/startups", description: "MVP development" },
                { name: "E-commerce", href: "/solutions/ecommerce", description: "Online store solutions" },
                { name: "SaaS", href: "/solutions/saas", description: "Software as a Service" },
            ],
        },
        {
            name: "Resources",
            href: "/resources",
            hasDropdown: true,
            items: [
                { name: "Documentation", href: "/docs", description: "Technical guides" },
                { name: "Blog", href: "/blog", description: "Latest insights" },
                { name: "Case Studies", href: "/case-studies", description: "Success stories" },
                { name: "Templates", href: "/templates", description: "Ready-to-use templates" },
                { name: "Community", href: "/community", description: "Join our community" },
            ],
        },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
};
