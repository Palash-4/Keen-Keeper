import React from "react";

const NumberCard = () => {
    return (
        <div className="bg-gray-100 px-6 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-green-800">10</h2>
                    <p className="text-gray-500 text-sm mt-1">Total Friends</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-green-800">3</h2>
                    <p className="text-gray-500 text-sm mt-1">On Track</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-green-800">6</h2>
                    <p className="text-gray-500 text-sm mt-1">Need Attention</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-green-800">12</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Interactions This Month
                    </p>
                </div>

            </div>
            
        </div>
    );
};

export default NumberCard;