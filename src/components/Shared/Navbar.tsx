import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ Correct import

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "Books", path: "/books" },
        { title: "Summary", path: "/summary" },
    ];

    return (
        <nav className="relative bg-gray-50 shadow">
            <div className="max-w-7xl py-1 mx-auto md:flex md:justify-between md:items-center">
                {/* Logo + Toggle */}
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-blue-600 dark:text-white tracking-wide"
                    >
                        BOIGHOR
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {!isOpen ? (
                                // Hamburger Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                // Close Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu Links */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center
          ${isOpen
                            ? "translate-x-0 opacity-100 text-center"
                            : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
                        }`}
                >
                    {/* Links */}
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `my-2 md:mx-4 md:my-0 transition-colors duration-200 ${isActive
                                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                                        : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
