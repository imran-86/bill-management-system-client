import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">BM</span>
                            </div>
                            <span className="text-xl font-bold">BillManager</span>
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Simplifying utility bill management for thousands of users. 
                            Fast, secure, and reliable bill payments.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Services', 'Contact', 'Blog'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bill Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Bill Categories</h3>
                        <ul className="space-y-2">
                            {['Electricity', 'Gas', 'Water', 'Internet', 'All Bills'].map((category) => (
                                <li key={category}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone size={18} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail size={18} />
                                <span>support@billmanager.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin size={18} />
                                <span>123 Business Ave, City</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 BillManager. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;