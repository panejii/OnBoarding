import React from 'react'
import {House, ClipboardList, Files, Mail, Bolt} from 'lucide-react'
import iconTelkomsel from '../assets/iconTelkomsel.png'

const IconButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                px-1
                py-1
                rounded-xl
                hover:bg-zinc-200
                duration-300
            "
        >
            {children}
        </button>
    );
};


const Sidebar = () => {
  return (
    <>
        <div className='fixed left-0 top-0 h-screen w-8 lg:w-10 xl:w-12 2xl:w-14 bg-white  flex flex-col items-center py-3'>
            {/* Logo Telkomsel */}
            <img src={iconTelkomsel} alt="Icon Telkomsel" className='w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 rounded-lg  flex items-center justify-center'/>
            
            {/* Line Pemisah */}
            <div className='w-4 border-b border-gray-300 my-2'></div>
            <p className='text-[6px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-zinc-500'>Main</p>
            
            {/* Sidebar Menu */}
            <div className='flex flex-col items-center gap-0.5 '>
                <button className='px-1 py-1 lg:px-1.5 lg:py-1.5 xl:px-2 xl:py-2 rounded-xl hover:bg-zinc-200 duration-300 '>
                    <House color='#525252' size={12}></House>
                </button>
                <button className='px-1 py-1 lg:px-1.5 lg:py-1.5 xl:px-2 xl:py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <ClipboardList color='#525252' size={12}></ClipboardList>
                </button>
                <button className='px-1 py-1 lg:px-1.5 lg:py-1.5 xl:px-2 xl:py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Files color='#525252' size={12}></Files>
                </button>
                <button className='px-1 py-1 lg:px-1.5 lg:py-1.5 xl:px-2 xl:py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Mail color='#525252' size={12}></Mail>
                </button>
                <button className='px-1 py-1 lg:px-1.5 lg:py-1.5 xl:px-2 xl:py-2 rounded-xl hover:bg-zinc-200 duration-300'>
                    <Bolt color='#525252' size={12}></Bolt>
                </button>
            </div>
        </div>
    </>
  )
}

export default Sidebar