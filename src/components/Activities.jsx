import React from 'react'

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Resorts</h3>
                <img src='https://www.travelpress.com/wp-content/uploads/2019/07/club-med-punta-cana-daily-600px.jpg' alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Cruises</h3>
                <img src='https://content.invisioncic.com/j283755/monthly_2023_03/600px-Azamara_Journey_Fremantle_2018_(04).jpg.a2bfe1b967cc89fda2790314cf234f47.jpg' alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Excursions</h3>
                <img src='https://cdn.greatbarrierreeftourscairns.com.au/wp-content/uploads/2021/05/snorkelling-on-the-great-barrier-reef.jpg' alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
            </div>
        </div>
    )
}

export default Activities;