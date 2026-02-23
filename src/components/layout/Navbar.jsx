import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "../../lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Impact", href: "#impact" },
        { name: "Get Involved", href: "#get-involved" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
                isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-display text-xl transition-transform group-hover:scale-110">
                        B
                    </div>
                    <span className={cn(
                        "font-display text-xl tracking-tight hidden sm:block transition-colors",
                        isScrolled ? "text-primary" : "text-primary"
                    )}>
                        Blue Ribbon <span className="text-secondary font-normal italic">Foundation</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-secondary-dark transition-all transform hover:scale-105">
                        <Heart size={16} />
                        Partner With Us
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[70px] bg-white z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-display text-primary border-b border-gray-100 pb-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-secondary text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                        <Heart size={20} />
                        Partner With Us
                    </button>
                </div>
            )}
        </header>
    );
}
