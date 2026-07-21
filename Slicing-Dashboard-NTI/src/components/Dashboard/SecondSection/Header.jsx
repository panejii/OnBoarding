import React from 'react'
import { CircleAlert } from 'lucide-react';
import { useFilterStore } from '../../../store/useFilterStore';

const Header = () => {

    const { category, movement, setCategory, setMovement} = useFilterStore()

    return (
    <div className='grid grid-cols-5'>
        <div className='bg-slate-100 col-span-1 rounded-t-4xl px-2 py-2'>
            <div >
                <select 
                value={category}
                onChange= {(e) => setCategory(e.target.value)}
                className='text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs bg-white rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-zinc-200 duration-300'>
                    <option value="fmc">FMC</option>
                    <option value="mbb">MBB</option>
                    <option value="fbb">FBB</option>
                </select>
            </div>
        </div>

        {/* MidField */}
        <div className='bg-white col-span-3 rounded-b-4xl flex justify-center items-center border-t-white '>
            <div className="bg-slate-200 flex rounded-full p-1">

                <button
                    onClick={() => setMovement("sample")}
                    className={`
                    px-3 py-1 rounded-full transition-all duration-300
                    text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs

                    ${
                        movement === "sample"
                        ? "bg-white shadow font-semibold"
                        : "text-gray-500"
                    }
                    `}
                >
                    Moving Sample
                </button>

                <button
                    onClick={() => setMovement("connectionType")}
                    className={`
                    px-3 py-1 rounded-full transition-all duration-300
                    text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs

                    ${
                        movement === "connectionType"
                        ? "bg-white shadow font-semibold"
                        : "text-gray-500"
                    }
                    `}
                >
                    Moving By Connection Type
                </button>

                </div>

            <div className='mx-3 border border-zinc-300 p-1 rounded-lg'>
                <CircleAlert size={16}/>
            </div>
            
        </div>
        <div className='bg-slate-100 col-span-1'>
            
        </div>
    </div>
  )
}

export default Header