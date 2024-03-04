import React from 'react'
import Chart from './PieChart'
import t from '../public/locales/ar/common.json'

const Metrics = () => {

    const data = [{
        "metric": "ﻓﻌﺎل",
        "color": "#3c50e0"
    },
    {
        "metric": "ﻣﺆرﺷﻒ",
        "color": "#8fd0ef"
    },
    {
        "metric": "ﻣﻨﺘﻬﻲ",
        "color": "#6477f3"
    },
    {
        "metric": "ﻗﺮﻳﺒﺎ",
        "color": "#10adcf"
    }]

    return (
        <div className='bg-white  xl:p-8 p-2 flex xl:items-start items-center flex-col rounded-3xl justify-center '>
            <h1 className='text-3xl text-gray-700  font-black'>{t.metricHeading}</h1>
            <div className='p-4'>
                <Chart />
            </div>
            <div className='grid grid-cols-2 gap-4'
            >
                {
                    data.map((item, idx) => {
                        return (
                            <div key={idx} className='flex items-center justify-center gap-4 font-bold'>
                                <div style={{ backgroundColor: item.color }} className='w-4 h-4 rounded-full'></div>
                                <h2 className='text-base w-16'>{item.metric}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Metrics