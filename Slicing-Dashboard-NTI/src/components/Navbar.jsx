import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='ml-14 py-6 px-6 bg-white rounded-b-2xl flex items-center justify-between'>

            {/* Judul */}
            <div>
                <h1 className='text-xl/tight font-bold'>MBB & FBB Executive Dashboard</h1>
            </div>
            

            {/* Dropdown */}
            <div className=' flex items-center gap-3 text-xs '>
                <select className='bg-slate-100 rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="">This Month</option>
                    <option value="">Last Month</option>
                    <option value="">Last 6 Month</option>
                </select>

                <select className='bg-slate-100 rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
                    <option value="">NationWide</option>
                    <option value="">Jakarta</option>
                    <option value="">Karawang</option>
                </select>
            </div>

        </div>
    </>
  )
}

export default Navbar