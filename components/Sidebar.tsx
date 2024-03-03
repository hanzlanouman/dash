'use client';
import { Sidebar } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import {
    HiArrowLeft,
    HiChartPie,
    HiDocument,
    HiInbox,
    HiPuzzle,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
} from 'react-icons/hi';

const AppSidebar = () => {
    const router = useRouter();
    const path = usePathname();

    return (
        <div className='fixed inset-y-0 right-0 z-50 w-24 bg-white md:fixed' dir='rtl'>
            {/* Sidebar container */}
            <div className='h-screen flex flex-col items-center gap-8'>
                {/* Top arrow icon */}
                <div className='flex items-center justify-center bg-[#e9edfb] w-full h-[5.8rem] '>
                    <HiArrowLeft className='w-8 h-8 text-gray-800' />
                </div>

                {/* Middle icons */}
                <div className='flex flex-col gap-2'>
                    {/* You can loop through your icons if they are in an array */}
                    <div
                        className={`cursor-pointer hover:bg-[#e9edfb] rounded-xl p-4
                        ${path === '/' ? 'bg-[#e9edfb]' : ''} `}


                        onClick={() => {
                            router.push('/');
                        }}
                    >

                        <HiChartPie className='w-10 h-10 text-gray-500' />
                    </div>
                    <div
                        className={`cursor-pointer hover:bg-[#e9edfb] rounded-xl p-4
                        ${path === '/reports' ? 'bg-[#e9edfb]' : ''} `}
                        onClick={() => {
                            router.push('/reports');
                        }}>
                        <HiDocument className='w-10 h-10 text-gray-500' />
                    </div>
                    <div
                        className={`cursor-pointer hover:bg-[#e9edfb] rounded-xl p-4
                        ${path === '/profile' ? 'bg-[#e9edfb]' : ''} `}
                        onClick={() => {
                            router.push('/profile');
                        }}>
                        <HiUser className='w-10 h-10 text-gray-500' />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AppSidebar;
