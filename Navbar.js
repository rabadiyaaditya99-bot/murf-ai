'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Convert", href: "/convert" },
        { label: "Translate", href: "/translate" },
        { label: "Extract", href: "/extract" },
        { label: "Dubbing", href: "/dub" },
        { label: "Summarize", href: "/summarize" },
    ];

    const linkRefs = useRef({});
    const underlineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const activeRef = linkRefs.current[pathname];
        const underline = underlineRef.current;

        if (activeRef && underline) {
            const { offsetLeft, offsetWidth } = activeRef;
            underline.style.transform = `translateX(${offsetLeft}px)`;
            underline.style.width = `${offsetWidth}px`;
        }
    }, [pathname]);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white dark:bg-black backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 shadow-lg border-b border-gray-200 dark:border-gray-800"
            : "bg-white dark:bg-black"} text-black dark:text-white font-medium`}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-tight flex gap-3 py-2 items-center hover:opacity-80 transition-opacity">
                    <Image 
                        src="/logo.png" 
                        alt="X-Aditya Logo" 
                        width={40} 
                        height={40} 
                        className="rounded-xl shadow-md"
                    />
                    <span className="text-black dark:text-white">X-Aditya</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8 text-sm items-center relative h-12">
                    {/* Underline Slider */}
                    <span
                        ref={underlineRef}
                        className="absolute bottom-3 h-[3px] bg-black dark:bg-white transition-all duration-300 rounded-full"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            ref={(el) => linkRefs.current[link.href] = el}
                            className={`relative px-3 py-2 text-base font-semibold transition-all duration-200 rounded-lg ${
                                pathname === link.href 
                                    ? "text-black dark:text-white" 
                                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden w-12 h-12 flex flex-col justify-center items-center gap-[6px] relative z-50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Menu"
                >
                    <span className={`block h-0.5 w-6 bg-black dark:bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-black dark:bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-0.5 w-6 bg-black dark:bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} px-4 pb-4`}>
                <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-4 py-3 rounded-lg transition-all duration-200 font-semibold ${
                                pathname === link.href
                                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-800"
                                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}