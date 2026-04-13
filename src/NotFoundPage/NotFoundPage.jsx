import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            <h1 className="text-7xl font-bold text-green-700 mb-4">404</h1>

            <h2 className="text-2xl font-semibold mb-2">
                Oops! Page not found
            </h2>

            <p className="text-gray-600 max-w-md mb-6">
                The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFoundPage;