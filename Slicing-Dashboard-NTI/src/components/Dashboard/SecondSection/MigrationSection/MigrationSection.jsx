import SankeyChart from '../MigrationSection/SankeyChart'
import React from 'react'
import { useState,useEffect } from 'react'

import { getMigrationData } from '../../../../services/migrationService'

import {UserRound} from 'lucide-react'
import { AnimatedCard, SkeletonChart, SkeletonText, SkeletonBox } from '../../../../animation'

const MigrationSection = () => {

    const [migration, setMigrationData] = useState({
      nodes: [],
      links: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadChart() {
          try {
            const data = await getMigrationData();
            setMigrationData(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }

        loadChart();
    }, []);

  return (
    <div className='bg-white mr-2 rounded-2xl border border-slate-200 h-full flex flex-col'>

      <AnimatedCard
        isLoading={isLoading}
        className="flex-1 flex flex-col"
        skeleton={
          <div className="flex flex-col h-full p-6 space-y-4">
            <SkeletonText className="w-40 h-6" />
            <div className="flex items-center justify-center gap-8 border border-slate-200 py-3">
              <SkeletonText className="w-16 h-3" />
              <SkeletonText className="w-16 h-3" />
              <SkeletonText className="w-16 h-3" />
            </div>
            <SkeletonChart className="flex-1" />
            <div className="flex items-center gap-3">
              <SkeletonBox className="w-8 h-8 rounded-2xl" />
              <SkeletonText className="w-2/3 h-4" />
            </div>
          </div>
        }
      >
        <div className='px-6 2xl:py-3 2xl:mt-1 lg:py-1.5 lg:mt-1 '>
            <h1 className='text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold px-1 py-1'>User Migration</h1>
        </div>
        <div className='flex items-center justify-center 2xl:gap-14 xl:gap-10 gap-8 border border-slate-200 py-3 text-zinc-400 text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs '>
            <h2>Incoming Sample</h2>
            <h2>Total FMC Sale</h2>
            <h2>Outcoming Sample</h2>
        </div>
        <div className='h-full'>
            <SankeyChart
                data={migration}
            />
        </div>

        <div className="flex items-center gap-3  p-6 lg:p-5 xl:p-6 2xl:p-8 ">
            <div className="border border-zinc-500 rounded-2xl">
                <UserRound/>
            </div>
            <div>
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nihil!</p>
            </div>
        </div>
      </AnimatedCard>

    </div>
  )
}

export default MigrationSection
