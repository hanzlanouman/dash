'use client'
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#3c51e0', '#6579f4', '#8fcff2', '#10afcf'];
const Chart = () => {
    return (
        <PieChart width={250} height={300} onMouseEnter={() => { }}>
            <Pie
                data={data}

                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default Chart