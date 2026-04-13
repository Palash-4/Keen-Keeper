import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#2f5d4a] text-white text-center py-16 px-6">
            <h2 className="text-4xl font-bold mb-4 ">KeenKeeper</h2>

            <p className="text-sm max-w-2xl mx-auto mb-6 text-gray-200">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>

            <h3 className="mb-3 font-medium">Social Links</h3>
            <div className="flex justify-center gap-4 mb-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                    <FaYoutube />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                    <FaFacebookF />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                    <FaXTwitter />
                </div>
            </div>

            <div className="border-t border-gray-300 opacity-30 mb-6"></div>

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 gap-4">
                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6">
                    <span className="hover:underline cursor-pointer">Privacy Policy</span>
                    <span className="hover:underline cursor-pointer">Terms of Service</span>
                    <span className="hover:underline cursor-pointer">Cookies</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;