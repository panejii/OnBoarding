import React from 'react'
import {House, ClipboardList, Files, Mail, Bolt} from 'lucide-react'
import iconTelkomsel from '../assets/iconTelkomsel.png'


const Sidebar = () => {
  return (
    <>
        <div className='fixed left-0 top-0 h-screen w-12 bg-white  flex flex-col items-center py-3'>
            {/* Logo Telkomsel */}
            <img src={iconTelkomsel} alt="Icon Telkomsel" className='w-12 h-12 rounded-lg  flex items-center justify-center'/>
            
            {/* Line Pemisah */}
            <div className='w-6 border-b border-gray-300 my-4'></div>
            <p className='text-sm text-zinc-500'>Main</p>
            
            {/* Sidebar Menu */}
            <div className='flex flex-col items-center gap-1 '>
                <button className='px-2 py-2 rounded-xl hover:bg-zinc-200 duration-300 '>
                    <House color='#525252' size={18}></House>
                </button>
                <button className='px-2 py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <ClipboardList color='#525252' size={18}></ClipboardList>
                </button>
                <button className='px-2 py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Files color='#525252' size={18}></Files>
                </button>
                <button className='px-2 py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Mail color='#525252' size={18}></Mail>
                </button>
                <button className='px-2 py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Bolt color='#525252' size={18}></Bolt>
                </button>
            </div>
        </div>
    </>
  )
}

export default Sidebar