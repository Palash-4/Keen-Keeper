import React from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ friend, getStatusStyle }) => {
    return (


        <Link to={`/friend/${friend.id}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition cursor-pointer">
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
                    className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(friend.status)}`}
                >
                    {friend.status === "almost due"
                        ? "Almost Due"
                        : friend.status === "on-track"
                            ? "On-Track"
                            : "Overdue"}
                </span>

            </div>
        </Link>
    );
};

export default FriendCard;