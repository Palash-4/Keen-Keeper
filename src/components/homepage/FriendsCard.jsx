import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import FriendCard from "./FriendCard";




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
        <div className="bg-gray-100 px-6 py-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {friends.map((friend) => (
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                            getStatusStyle={getStatusStyle}
                        />
                    ))}

                </div>
            </div>

        </div>

    );
};

export default FriendsCard;