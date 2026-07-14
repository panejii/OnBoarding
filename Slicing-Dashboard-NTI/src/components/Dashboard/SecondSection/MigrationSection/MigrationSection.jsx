import SankeyChart from '../MigrationSection/SankeyChart'
import React from 'react'
import { migrationData } from '../../../../data/migrationData'
import {UserRound} from 'lucide-react'

const MigrationSection = () => {
  return (
    <div className='bg-white mr-2 rounded-2xl border border-slate-200 '>
        <div className='p-6'>
            <h1 className='text-2xl font-semibold'>User Migration</h1>
        </div>
        <div className='flex items-center justify-center gap-32 border border-slate-200 py-6'>
            <h2 className='text-zinc-400 text-xs'>Incoming Sample</h2>
            <h2 className='text-zinc-400 text-xs'>Total FMC Sale</h2>
            <h2 className='text-zinc-400 text-xs'>Outcoming Sample</h2>
        </div>
        <div>
            <SankeyChart
                data={migrationData}
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