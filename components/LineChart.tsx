import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        //    Arabic december
        name: 'ﺟﺎﻣﻌﺔ',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic Novermbet
        name: 'ﻧﻮﻧﺒﻴﺮ',
        uv: 3000,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic October
        name: 'ﺷﺎﺭﺓ',
        uv: 2100,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic Septembter
        name: 'ﺷﺮﻳﻚ',
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic August
        name: 'ﺃﺷﻬﺮ',
        uv: 2400,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic July
        name: 'ﺟﻮﻧﻴﺔ',
        uv: 3100,
        pv: 2400,
        amt: 2400,
    },
    {
        //    Arabic June
        name: 'ﺟﻮﻧﻴﺔ',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        // Arabic May
        name: 'ﻣﺎﻳﺴﺘﺎ',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        // Arabic april
        name: 'ﺃﺑﺮﻳﻞ',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        // Arabic March as Maars
        name: 'ﻣﺎرﺷﺔ',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        // Arabic February
        name: 'ﻓﺒﺎرﻳﻴﺖ',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        // Arabic Months
        name: 'ﺟﻴﺮﺣﺔ',
        uv: 3900,
        pv: 4300,
        amt: 2100,
    },
];
const LineChart = () => {
    return (
        <div className='rounded-3xl bg-white py-8 '>
            <h1 className='text-3xl font-black p-8 mb-8'>إﺟﻤﺎﻟﻲ اﻟﺰﻳﺎرات</h1>{' '}
            <AreaChart
                data={data}
                width={900}
                height={300}
                margin={{
                    top: 10,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#ccb1f6' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#ccb1f6' stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <XAxis dataKey='name' axisLine={false} tickLine={false} />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    orientation='right'
                    tickMargin={50}
                />
                <CartesianGrid stroke='3 3' vertical={false} />
                <Tooltip />
                <Area
                    type='linear' // Changed to linear for sharper edges
                    dataKey='uv'
                    stroke='#8884d8'
                    fillOpacity={20}
                    fill='url(#colorUv)'
                    strokeWidth={2}
                    dot={{ stroke: '#8884d8', strokeWidth: 10, fill: '#ffffff' }} // Permanently mark the data points
                />
            </AreaChart>
        </div>
    );
};

export default LineChart;
