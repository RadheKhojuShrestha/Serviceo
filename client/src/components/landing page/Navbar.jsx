import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to close mobile menu after clicking
    const handleNavClick = () => {
        setOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    className={`text-2xl font-extrabold tracking-wide cursor-pointer
                    transition-colors duration-300
                    ${scrolled ? "text-blue-600" : "text-white"}`}
                >
                    Serviceo
                </a>

                {/* <a
                    href="#"
                    className={`font-poppins text-3xl font-medium tracking-wide cursor-pointer
                    transition-colors duration-300
                    ${scrolled ? "text-blue-600" : "text-white"}`}
                >
                    Serviceo
                </a> */}


                {/* Desktop Menu */}
                <ul
                    className={`hidden md:flex items-center gap-10 font-medium transition-colors duration-300
                    ${scrolled ? "text-gray-700" : "text-white"}`}
                >
                    <li>
                        <a href="#services" className="hover:text-blue-500 transition">Services</a>
                    </li>
                    <li>
                        <a href="#how-it-works" className="hover:text-blue-500 transition">How It Works</a>
                    </li>
                    <li>
                        <a href="#why-serviceo" className="hover:text-blue-500 transition">Why Serviceo</a>
                    </li>
                </ul>

                {/* Auth Buttons */}
                <div
                    className={`hidden md:flex items-center gap-4 transition-colors duration-300
                    ${scrolled ? "text-gray-700" : "text-white"}`}
                >
                    <Link to="/login" className="hover:text-blue-500">Login</Link>
                    <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden text-3xl transition-colors duration-300
                    ${scrolled ? "text-gray-800" : "text-white"}`}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <ul className="flex flex-col p-6 gap-5 text-gray-700 font-medium">
                        <li>
                            <a href="#services" onClick={handleNavClick} className="hover:text-blue-600">Services</a>
                        </li>
                        <li>
                            <a href="#how-it-works" onClick={handleNavClick} className="hover:text-blue-600">How It Works</a>
                        </li>
                        <li>
                            <a href="#why-serviceo" onClick={handleNavClick} className="hover:text-blue-600">Why Serviceo</a>
                        </li>
                        <hr />
                        <li className="text-blue-600 cursor-pointer">
                            <Link to="/login" onClick={handleNavClick}>Login</Link>
                        </li>
                        <li className="text-blue-600 cursor-pointer">
                            <Link to="/register" onClick={handleNavClick}>Register</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
