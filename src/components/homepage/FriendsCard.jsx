import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";




const FriendsCard = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    }, []);



    const getStatusStyle = (status) => {
        if (status === "overdue") return "bg-red-500 text-white";
        if (status === "almost due") return "bg-yellow-400 text-white";
        if (status === "on-track") return "bg-green-700 text-white";
    };
    if (loading) {
        return (
            <div className="bg-gray-100 py-20 flex justify-center items-center">
                <Circles
                    height="80"
                    width="80"
                    color="#166534"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 px-6 py-1">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {friends.map((friend) => (
                        <div
                            key={friend.id}
                            className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
                        >
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />

                            <h3 className="font-semibold text-gray-800">
                                {friend.name}
                            </h3>

                            <p className="text-xs text-gray-400 mb-2">
                                {friend.days_since_contact}d ago
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-3">
                                {friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                                    >
                                        {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <span
                                className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(
                                    friend.status
                                )}`}
                            >
                                {friend.status === "almost due"
                                    ? "Almost Due"
                                    : friend.status === "on-track"
                                        ? "On-Track"
                                        : "Overdue"}
                            </span>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    );
};

export default FriendsCard;