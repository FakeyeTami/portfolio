"use client";

import { saveAs } from "file-saver";
import DropDownAnimation from "./animations/DropDown";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { title: "Home", id: "home" },
        { title: "About", id: "about" },
        { title: "Experience", id: "experience" },
        // { title: "Projects", id: "projects" },
        { title: "Contact", id: "contact" },
    ];

    const handleDownload = () => {
        saveAs("./docs/Resume.pdf", "resume.pdf");
    };

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Header height + some padding
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-sm shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center py-4 container">
                <DropDownAnimation>
                    <a href="#" className="font-bold text-xl gradient-text">
                        Tami<span className="text-foreground">WebDev</span>
                    </a>
                </DropDownAnimation>

                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item, index) => (
                        <DropDownAnimation delay={index} key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-200"
                            >
                                {item.title}
                            </button>
                        </DropDownAnimation>
                    ))}
                </div>
                <DropDownAnimation>
                    <Button className="hidden md:flex bg-accent hover:bg-primary font-semibold text-white">
                        <a href="/resume.pdf" download="resume.pdf">
                            Resume
                        </a>
                    </Button>
                </DropDownAnimation>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-sm py-4 animate-fade-in">
                    <div className="flex flex-col space-y-4 container">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="py-2 font-semibold text-foreground/80 hover:text-primary transition-colors duration-200"
                            >
                                {item.title}
                            </button>
                        ))}
                        <Button
                            className="bg-accent hover:bg-primary mt-2 w-full font-semibold text-white"
                            onClick={handleDownload}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
