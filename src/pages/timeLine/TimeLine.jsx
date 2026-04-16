import React, { useEffect, useState } from "react";
import { Phone, MessageCircle, Video } from "lucide-react";

const TimeLine = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];
        setData(stored);
    }, []);

    const getIcon = (type) => {
        if (type === "Call") return <Phone size={18} />;
        if (type === "Text") return <MessageCircle size={18} />;
        if (type === "Video") return <Video size={18} />;
    };

    const filteredData =
        filter === "All"
            ? data
            : data.filter((item) => item.type === filter);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-2xl font-bold mb-4">Timeline</h1>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-8 bg-white shadow-sm px-3 py-2 rounded-lg text-sm"
                >
                    <option value="All">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>

                <div className="space-y-3">

                    {filteredData.length === 0 ? (
                        <p className="text-gray-500 text-sm">No activity found</p>
                    ) : (
                        filteredData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-md transition"
                            >
                                {/* Icon */}
                                <div className="text-gray-600">
                                    {getIcon(item.type)}
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="text-sm font-medium">
                                        {item.type} with {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.date}
                                    </p>
                                </div>
                                
                            </div>


                        ))
                    )}

                </div>

            </div>
        </div>
    );
};

export default TimeLine;