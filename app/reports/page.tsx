import React from 'react'
import StatCards from '../../components/StatCards'
import LineChart from '../../components/LineChart'
import Metrics from '../../components/Metrics'
import DataTable from '@/components/DataTable'

const page = () => {
    return (
        <div className='bg-[#f1f5f9]'>
            <div className='xl:mx-40 mx-12 mr-32 flex flex-col xl:items-baseline items-center  '>
                <StatCards />
                <div className='flex items-center justify-end gap-4 w-full mb-20 md:flex-row flex-col'>


                    <Metrics />
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default page