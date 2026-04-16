import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Clock, Archive, Trash2, Phone, MessageCircle, Video } from "lucide-react";
import { toast } from "react-toastify";


const FriendsDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);


    const handleAction = (type) => {
        const existing = JSON.parse(localStorage.getItem("timeline")) || [];

        const alreadyExists = existing.find(
            (item) => item.name === friend.name && item.type === type
        );

        if (alreadyExists) {
            toast.error(`${type} already added for ${friend.name}`, {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            return;
        }

        const newEntry = {
            id: Date.now(),
            type: type,
            name: friend.name,
            date: new Date().toLocaleDateString(),
        };

        const updated = [newEntry, ...existing];
        localStorage.setItem("timeline", JSON.stringify(updated));

        toast.success(`${type} added with ${friend.name}`, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
    };

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((f) => f.id === parseInt(id));
                setFriend(found);
            });
    }, [id]);

    if (!friend) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-22 h-22 rounded-full mx-auto mb-3"
                        />
                        <h2 className="font-bold text-lg">{friend.name}</h2>
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                            {friend.status === "almost due" ? "Almost Due" : friend.status === "on-track" ? "On-Track" : "Overdue"}
                        </span>

                        <div className="flex justify-center gap-2 mt-2">
                            {friend.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                            "{friend.bio}"
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                            Preferred: email
                        </p>
                    </div>

                    <div className="space-y-3">

                        <button className="w-full bg-white shadow rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                            <Clock size={16} />
                            Snooze 2 Weeks
                        </button>

                        <button className="w-full bg-white shadow rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                            <Archive size={16} />
                            Archive
                        </button>

                        <button className="w-full bg-white text-red-500 shadow rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition">
                            <Trash2 size={16} />
                            Delete
                        </button>

                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-xl font-bold text-green-800">
                                {friend.days_since_contact}
                            </h2>
                            <p className="text-xs text-gray-500">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-xl font-bold text-green-800">
                                {friend.goal}
                            </h2>
                            <p className="text-xs text-gray-500">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-lg font-bold text-green-800">
                                {friend.next_due_date}
                            </h2>
                            <p className="text-xs text-gray-500">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                        <div>
                            <h3 className="text-green-900 font-bold text-sm">Relationship Goal</h3>
                            <p className="text-sm text-gray-600">
                                Connect every <b>{friend.goal} Days</b>
                            </p>
                        </div>
                        <button className="border px-3 py-1 rounded text-sm">Edit</button>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow">
                        <h3 className="text-green-900 font-bold text-sm mb-3">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-4">

                            <button
                                onClick={() => handleAction("Call")}
                                className="bg-white shadow rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50 hover:scale-105 transition"
                            >
                                <Phone size={20} className="text-gray-700" />
                                <span className="text-sm font-bold">Call</span>
                            </button>

                            <button
                                onClick={() => handleAction("Text")}
                                className="bg-white shadow rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50 hover:scale-105 transition"
                            >
                                <MessageCircle size={20} className="text-gray-700" />
                                <span className="text-sm font-bold">Text</span>
                            </button>

                            <button
                                onClick={() => handleAction("Video")}
                                className="bg-white shadow rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50 hover:scale-105 transition"
                            >
                                <Video size={20} className="text-gray-700" />
                                <span className="text-sm font-bold">Video</span>
                            </button>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default FriendsDetails;