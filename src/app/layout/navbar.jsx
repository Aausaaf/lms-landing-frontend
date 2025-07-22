"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Bell, User, Settings, LogOut} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import "./styles/index.css";
import { navigation } from "./config/navbar";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 shadow-sm">
            <nav className="mx-auto flex max-w-[1500px] items-center justify-between p-4 lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-lg">
                                <span className="text-white font-bold text-lg">L</span>
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">LayoutPro</span>
                                <div className="text-xs text-orange-500 font-medium">Premium Components</div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Desktop Search */}
                <div className="hidden lg:block navbar_search_bar">
                    <Input type="search" icon={<Search className="h-4 w-4 text-gray-400" />} placeholder="Search products, docs, tutorials..." className="" />
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
                        <Search className="h-5 w-5" />
                    </Button>
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-1" ref={dropdownRef}>
                    {navigation.main.map((item) => (
                        <div key={item.name} className="relative">
                            {item.hasDropdown ? (
                                <button
                                    onClick={() => toggleDropdown(item.name)}
                                    className="flex items-center gap-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                >
                                    {item.name}
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-sm block font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {item.hasDropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 mt-2 w-screen max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-4 z-50">
                                    {item.megaMenu ? (
                                        <div className="grid grid-cols-2 gap-4 p-4">
                                            {item.megaMenu.map((category) => (
                                                <div key={category.category}>
                                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-3">{category.category}</h3>
                                                    <div className="space-y-1">
                                                        {category.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                <subItem.icon className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                                <div>
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{subItem.name}</div>
                                                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subItem.description}</div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="py-2">
                                            {item.items?.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{subItem.name}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subItem.description}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop CTA and Actions */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <Badge className="absolute -top-1 -right-1  p-1 pt-0 pb-0 text-xs bg-orange-500 hover:bg-orange-600">3</Badge>
                    </Button>

                    <div className="relative">
                        <Button variant="ghost" size="icon" onClick={() => toggleDropdown("profile")}>
                            <User className="h-5 w-5" />
                        </Button>

                        {activeDropdown === "profile" && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                                <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <User className="h-4 w-4" />
                                    Profile
                                </Link>
                                <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Settings className="h-4 w-4" />
                                    Settings
                                </Link>
                                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                                <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 w-full text-left">
                                    <LogOut className="h-4 w-4" />
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>

                    {/* <ThemeToggle /> */}

                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                        Get Started Free
                    </Button>
                </div>
            </nav>

            {/* Mobile Search */}
            {searchOpen && (
                <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 p-4">
                    <Input icon={<Search className="h-4 w-4 text-gray-400" />} type="search" placeholder="Search..." className="w-full" autoFocus />
                </div>
            )}

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                <div className="flex items-center space-x-2">
                                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">L</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">LayoutPro</span>
                                </div>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
                                <div className="space-y-2 py-6">
                                    {navigation.main.map((item) => (
                                        <div key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.items && (
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="py-6 space-y-4">
                                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started Free</Button>
                                    {/* <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                                        <ThemeToggle />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
