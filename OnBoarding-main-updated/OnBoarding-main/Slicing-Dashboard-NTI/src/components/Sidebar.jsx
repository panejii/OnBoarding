import {useState} from 'react'
import {House, ClipboardList, Files, Mail, Bolt} from 'lucide-react'
import iconTelkomsel from '../assets/iconTelkomsel.png'

const menus = [
  { id: "home", icon: House },
  { id: "report", icon: ClipboardList },
  { id: "files", icon: Files },
  { id: "mail", icon: Mail },
  { id: "setting", icon: Bolt },
];

const Sidebar = () => {

    const [active, setActive] = useState("home");

    return (
    <>
        <div className='fixed left-0 top-0 h-screen w-8 lg:w-10 xl:w-12 2xl:w-14 bg-white  flex flex-col items-center py-3'>
            {/* Logo Telkomsel */}
            <img src={iconTelkomsel} alt="Icon Telkomsel" className='w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 rounded-lg  flex items-center justify-center'/>
            
            {/* Line Pemisah */}
            <div className='w-4 border-b border-gray-300 my-2'></div>
            <p className='text-[6px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-zinc-500'>Main</p>
            
            {/* Sidebar Menu */}
            <div className="flex flex-col items-center gap-1 mt-2">
                {menus.map((menu) => {
                const Icon = menu.icon;
                const isActive = active === menu.id;

                return (
                    <button
                    key={menu.id}
                    onClick={() => setActive(menu.id)}
                    className={`
                        flex items-center justify-center
                        w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7
                        rounded-lg
                        transition-all duration-300

                        ${
                        isActive
                            ? `
                            bg-linear-to-b
                            from-blue-400
                            to-blue-700
                            shadow-[0_0_15px_rgba(59,130,246,.6)]
                            ring-2
                            ring-blue-300
                            `
                            : `
                            hover:bg-zinc-100
                            `
                        }
                    `}
                    >
                    <Icon
                        size={12}
                        color={isActive ? "white" : "#64748b"}
                        strokeWidth={2.3}
                    />
                    </button>
                );
                })}
            </div>
        </div>
    </>
  )
}

export default Sidebar