import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart2 } from "lucide-react";

const Navbar = () => {
    return (
        <div className="shadow bg-gray-200">
            <div className="container mx-auto navbar px-6">

                <div className="flex-1">
                    <h1 className="text-xl font-bold">
                        <span className="text-black">Keen</span>
                        <span className="text-green-700">Keeper</span>
                    </h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal items-center gap-4">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-md ${isActive
                                        ? "bg-green-900 text-white"
                                        : "text-gray-600 hover:text-black"
                                    }`
                                }
                            >
                                <Home size={18} />
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/timeline"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-md ${isActive
                                        ? "bg-green-900 text-white"
                                        : "text-gray-600 hover:text-black"
                                    }`
                                }
                            >
                                <Clock size={18} />
                                Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/stats"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-md ${isActive
                                        ? "bg-green-900 text-white"
                                        : "text-gray-600 hover:text-black"
                                    }`
                                }
                            >
                                <BarChart2 size={18} />
                                Stats
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Navbar;