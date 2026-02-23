import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-accent pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-display text-xl">
                                B
                            </div>
                            <span className="font-display text-xl tracking-tight">
                                Blue Ribbon <span className="text-secondary font-normal italic">Foundation</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                            Restoring Hope. Unlocking Potential. Building Futures. A youth-centered NGO dedicated to leadership, inclusion, and community empowerment across Africa.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={20} />} href="#" />
                            <SocialIcon icon={<Facebook size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li><FooterLink href="#about">Our Story</FooterLink></li>
                            <li><FooterLink href="#vision">Mission & Vision</FooterLink></li>
                            <li><FooterLink href="#impact">Impact Reports</FooterLink></li>
                            <li><FooterLink href="#get-involved">Get Involved</FooterLink></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-6">Our Programs</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li><FooterLink href="#tiv">Teens in Vogue (TIV)</FooterLink></li>
                            <li><FooterLink href="#gatekeepers">The Gatekeepers</FooterLink></li>
                            <li><FooterLink href="#liones">LIONES Empowerment</FooterLink></li>
                            <li><FooterLink href="#blue-city">The Blue City</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-secondary shrink-0" />
                                <span>Lagos, Nigeria</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-secondary shrink-0" />
                                <span>+234 [Placeholder]</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-secondary shrink-0" />
                                <span>info@blueribbon.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs opacity-60 italic">
                        "Spirituality with Strategy" — Dec 2020
                    </p>
                    <p className="text-xs opacity-60">
                        © {currentYear} Blue Ribbon Foundation. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-secondary hover:border-secondary hover:text-white"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <a href={href} className="hover:text-secondary hover:translate-x-1 inline-block transition-all">
            {children}
        </a>
    );
}
