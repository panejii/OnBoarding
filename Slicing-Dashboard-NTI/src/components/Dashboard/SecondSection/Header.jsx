import React from 'react'
import { CircleAlert } from 'lucide-react';

const Header = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='bg-slate-100 col-span-1 rounded-t-4xl px-2 py-6'>
            <div >
                <select className='bg-white rounded-2xl py-3 pl-9 pr-27 border border-slate-200 hover:bg-zinc-200 duration-300'>
                    <option value="">This Month</option>
                    <option value="">Last Month</option>
                    <option value="">Last 6 Month</option>
                </select>
            </div>
        </div>
        <div className='bg-white col-span-3 rounded-b-4xl flex justify-center items-center border-t-white '>
            <div className='bg-slate-200 flex gap-24 justify-center text-center items-center  rounded-4xl'>
                <div className='bg-white py-2 px-12 ml-2 my-2 rounded-4xl' >
                    <h1 className='font-semibold'>Moving Sample</h1>
                </div>
                <div className='py-2 pr-12 mr-2 my-2 rounded-4xl'>
                    Moving By Connection Type
                </div>
            </div>

            <div className='mx-3 border border-zinc-300 p-3 rounded-4xl'>
                <CircleAlert/>
            </div>
            
        </div>
        <div className='bg-slate-100 col-span-1'>
            
        </div>
    </div>
  )
}

export default Header