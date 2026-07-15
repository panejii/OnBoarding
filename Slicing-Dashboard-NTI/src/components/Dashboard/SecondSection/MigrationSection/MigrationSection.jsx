import SankeyChart from '../MigrationSection/SankeyChart'
import React from 'react'
import { useState,useEffect } from 'react'

import { getMigrationData } from '../../../../services/migrationService'

import {UserRound} from 'lucide-react'

const MigrationSection = () => {

    const [migration, setMigrationData] = useState({
      nodes: [],
      links: []
    })

    useEffect(() => {
        async function loadChart() {
          try {
            const data = await getMigrationData();
            setMigrationData(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        loadChart();
    }, []);
    
  return (
    <div className='bg-white mr-2 rounded-2xl border border-slate-200 h-full flex flex-col'>
        <div className='p-3'>
            <h1 className='text-xs font-semibold'>User Migration</h1>
        </div>
        <div className='flex items-center justify-center gap-16 border border-slate-200 py-3'>
            <h2 className='text-zinc-400 text-[8px]'>Incoming Sample</h2>
            <h2 className='text-zinc-400 text-[8px]'>Total FMC Sale</h2>
            <h2 className='text-zinc-400 text-[8px]'>Outcoming Sample</h2>
        </div>
        <div className=''>
            <SankeyChart
                data={migration}
            />
        </div>
        
        <div className="flex items-center gap-3  p-6">
            <div className="border border-zinc-500 rounded-2xl">
                <UserRound/>
            </div>
            <div>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nihil!</p>
            </div>
      </div>
       
    </div>
  )
}

export default MigrationSection