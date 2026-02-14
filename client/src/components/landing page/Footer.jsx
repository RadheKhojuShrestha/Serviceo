import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-white mb-4">Serviceo</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Serviceo connects you with trusted local professionals for home services,
                            repairs, cleaning, and more. Book reliable services quickly and securely.
                        </p>
                    </div>

                    {/* For Customers */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">For Customers</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Find Services</a></li>
                            <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                            <li><a href="#" className="hover:text-white transition">Customer Reviews</a></li>
                            <li><a href="#" className="hover:text-white transition">Book a Service</a></li>
                            <li><a href="#" className="hover:text-white transition">Support</a></li>
                        </ul>
                    </div>

                    {/* For Service Providers */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">For Service Providers</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Become a Provider</a></li>
                            <li><a href="#" className="hover:text-white transition">Provider Dashboard</a></li>
                            <li><a href="#" className="hover:text-white transition">Earnings</a></li>
                            <li><a href="#" className="hover:text-white transition">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition">Community</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-1" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500" />
                                <span>+977-9800000000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500" />
                                <span>support@serviceo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Serviceo. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
