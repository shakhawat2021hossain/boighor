import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 py-6 mt-10">
            <div className="container mx-auto px-6 text-center">

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Boighor Library. All rights reserved.
                </p>

                <div className="mt-3 flex justify-center space-x-4 text-gray-600 dark:text-gray-400">
                    <a
                        href="#"
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a
                        href="#"
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Terms
                    </a>
                    <span>|</span>
                    <a
                        href="#"
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
