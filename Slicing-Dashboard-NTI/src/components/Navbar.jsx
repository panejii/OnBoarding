import React, { useState } from 'react'
import { useFilterStore } from '../store/useFilterStore';

const Navbar = () => {

    const { period, region, setPeriod, setRegion } = useFilterStore();

  return (
    <>
        <div className='ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 py-3 px-3 bg-white rounded-b-2xl flex items-center justify-between'>

            {/* Judul */}
            <div>
                <h1 className=' text-xs/tight lg:text-sm xl:text-base 2xl:text-lg font-bold'>MBB & FBB Executive Dashboard</h1>
            </div>
            

            {/* Dropdown */}
            <div className=' flex items-center gap-3 text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm '>
                <select 
                value={period} 
                onChange = {(e) => setPeriod(e.target.value)}
                className='bg-slate-100 rounded-2xl py-1 lg:py-1.5 xl:py-2 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="this_month">This Month</option>
                    <option value="this_week">This Week</option>
                    <option value="today">Today</option>
                </select>

                <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className='bg-slate-100 rounded-2xl py-1 lg:py-1.5 xl:py-2 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="nationwide">NationWide</option>
                    <option value="regionalwide">RegionalWide</option>
                    <option value="citywide">CityWide</option>
                </select>
            </div>

        </div>
    </>
  )
}

export default Navbar