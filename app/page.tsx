'use client';
import LineChart from '@/components/LineChart';
import Metrics from '@/components/Metrics';
import PieChart from '@/components/PieChart';
import StatCards from '@/components/StatCards';

export default function Home() {
  return (
    <div className='bg-[#f1f5f9]'>
      <div className='xl:mx-40 mx-12 mr-32 flex flex-col xl:items-baseline items-center  '>
        <StatCards />
        <div className='flex items-center justify-between gap-4 w-full mb-20 md:flex-row flex-col'>

          <LineChart /> <Metrics />
        </div>
      </div>
    </div>
  );
}
