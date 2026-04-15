import React from "react";
import { UserPlus } from "lucide-react";

const Banner = () => {
    return (
        <div className="bg-gray-100 py-20 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
                Friends to keep close in your life
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto mb-6 text-sm md:text-base">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>
            <button className="inline-flex items-center gap-2 bg-green-900 text-white px-5 py-2 rounded-md hover:bg-green-900 transition">
                <UserPlus size={17} />
                Add a Friend
            </button>

        </div>
    );
};

export default Banner;