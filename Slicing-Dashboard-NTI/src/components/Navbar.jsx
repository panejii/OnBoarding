import React, { useState } from 'react'

const Navbar = () => {

    const [Granularity, setGranularity] = useState("This Month")

    const onChange = (e) => {
        const value = e.target.value;
        setGranularity(value);
    }

  return (
    <>
        <div className='ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 py-3 px-3 bg-white rounded-b-2xl flex items-center justify-between'>

            {/* Judul */}
            <div>
                <h1 className=' text-xs/tight lg:text-sm xl:text-base 2xl:text-lg font-bold'>MBB & FBB Executive Dashboard</h1>
            </div>
            

            {/* Dropdown */}
            <div className=' flex items-center gap-3 text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm '>
                <select value={Granularity} onChange={onChange} oncl className='bg-slate-100 rounded-2xl py-1 lg:py-1.5 xl:py-2 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="This Month">This Month</option>
                    <option value="Last Month">This Week</option>
                    <option value="6 Month">Today</option>
                </select>

                <select className='bg-slate-100 rounded-2xl py-1 lg:py-1.5 xl:py-2 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="Nationwide">NationWide</option>
                    <option value="Jakarta">RegionalWide</option>
                    <option value="Karawang">CityWide</option>
                </select>
            </div>

        </div>
    </>
  )
}

export default Navbar