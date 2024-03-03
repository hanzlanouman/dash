import React from 'react'
import t from '../public/locales/ar/common.json'
import { Card } from 'flowbite-react';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { Noto_Nastaliq_Urdu } from 'next/font/google';
import { RiHome2Line } from 'react-icons/ri';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700']
});
interface Props {
    data: {
        title: string,
        color: string,
        colorLight: string,
        stats: string,
        icon: string,
    }[]
}

const StatCard = ({ data }: Props) => {
    return data.map((item, idx) => {
        console.log(item.icon)
        return (
            <div className={`rounded-3xl overflow-hidden flex flex-col justify-center `} key={idx}>
                {/* Top Heading */}
                <div style={{ backgroundColor: item.color }} className={`p-4 text-center`}>
                    <h2 className='text-xl font-extrabold text-gray-800'>{item.title}</h2>
                </div>
                {/* Stats */}
                <div style={{ backgroundColor: item.colorLight }} className={`p-8 gap-4 flex items-center `}>
                    <div className='rounded-full p-3  flex justify-start items-start backdrop-brightness-[0.9]'>
                        {/* Icon */}
                        <div className='relative w-9 h-9'>
                            <Image src={item.icon} layout='fill' alt='icon' />
                        </div>
                    </div>
                    <h2 className={`text-[2.5rem] font-[900] text-[#48484a] ${montserrat.className}`}>
                        {item.stats}
                    </h2>
                </div>
            </div>
        );
    });
};

export default StatCard;

