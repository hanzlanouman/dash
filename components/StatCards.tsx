import React from 'react';
import StatCard from './StatCard';
import t from '../public/locales/ar/common.json';

const StatCards = () => {
    const data = [
        {
            title: t.studentDone,
            color: '#b0dce4',
            colorLight: "#d4edf1",
            stats: '100K',
            icon: '/icon1.svg'

        },
        {
            title: t.studentsAssigned,
            color: '#ffeea0',
            colorLight: "#fff7cb",

            stats: '5',
            icon: '/icon2.svg'
        },
        {
            title: t.studentsPassed,
            color: '#bee1ff',
            colorLight: "#dcf0ff",

            stats: '30K',
            icon: '/iconx.svg'
        },
        {
            title: t.studentsDegree,
            color: '#cab9f8',
            colorLight: "#e2dafc",
            icon: '/icon3.svg',

            stats: '5K',
        },
        {
            title: t.studentHours,
            color: '#b0dce4',
            colorLight: "#d4edf1",
            icon: '/icon5.svg',


            stats: '45:20',
        },
    ];
    return (
        <div className='pb-10'>

            <div>
                <h1 className='text-5xl py-6 font-bold text-gray-700'>{t.heading}</h1>
            </div>
            <div className='grid xl:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-3 '>
                <StatCard data={data} />
            </div>
        </div>
    );
};

export default StatCards;
