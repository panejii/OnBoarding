import iconTelkomsel from "../assets/iconTelkomsel.png"
import {Minus,House, ClipboardList, Files, Mail, Bolt } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <div className="bg-white border border-[#F1F5F9] h-screen p-2 flex flex-col items-center">
            {/* provile info */}
            <img src={iconTelkomsel} alt="" className="w-fit h-[78px] " />

            {/* divider */}
            <div className="mt-2 h-px w-10 bg-[radial-gradient(circle,_#597EF7_0%,_rgba(16,35,158,0)_100%)]">
                
            </div>

            {/* menu */}
            <div className="py-8 px-6 gap-8 flex flex-col items-center">
                <h1 className="font-bold text-[#64748B]">Menu</h1>
                <div className="flex flex-col gap-4">
                    <button className='p-4 rounded-xl hover:bg-zinc-200 duration-300 '>
                        <House color='#64748B' size={18}></House>
                    </button>
                    <button className='p-4 rounded-xl hover:bg-zinc-200 duration-300'>
                        <ClipboardList color='#64748B' size={18}></ClipboardList>
                    </button>
                    <button className='p-4 rounded-xl hover:bg-zinc-200 duration-300'>
                        <Files color='#64748B' size={18}></Files>
                    </button>
                    <button className='p-4 rounded-xl hover:bg-zinc-200 duration-300'>
                        <Mail color='#64748B' size={18}></Mail>
                    </button>
                    <button className='p-4 rounded-xl hover:bg-zinc-200 duration-300'>
                        <Bolt color='#64748B' size={18}></Bolt>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar