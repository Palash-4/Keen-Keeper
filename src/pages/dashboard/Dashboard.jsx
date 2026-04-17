import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("timeline")) || [];
        const textCnt = store.filter(item => item.type === "Text").length;
        const callCnt = store.filter(item => item.type === "Call").length;
        const videoCnt = store.filter(item => item.type === "Video").length;

        const chartData = [
            { name: "Text", value: textCnt, fill: "#7c3aed" },
            { name: "Call", value: callCnt, fill: "#166534" },
            { name: "Video", value: videoCnt, fill: "#22c55e" },
        ].filter(item => item.value > 0);
        setData(chartData);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-2xl font-bold mb-7">
                    Friendship Analytics
                </h1>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-sm">
                        By Interaction Type
                    </h3>

                    <div className="flex justify-center">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                innerRadius={80}
                                outerRadius={110}
                                paddingAngle={4}
                                dataKey="value"
                                cornerRadius={10}
                            />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;