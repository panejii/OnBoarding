import ShareColumn from './ShareColumn'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { getMbbData, getFbbData } from '../../../services/shareService'

import { AnimatedCard, SkeletonBox, SkeletonText } from '../../../animation'
import ErrorState from '../../ErrorState'
import { useFilterStore } from '../../../store/useFilterStore'

const ShareCard = () => {

  const {period, source, region, setSource} = useFilterStore()

  const {
    data: mbbData = [],
    isLoading: isLoadingMbb,
    isError: isErrorMbb,
  } = useQuery({
    queryKey: ["mbbData", period, source, region],
    queryFn: () => getMbbData({period, source, region}),
  });

  const {
    data: fbbData = [],
    isLoading: isLoadingFbb,
    isError: isErrorFbb,
  } = useQuery({
    queryKey: ["fbbData", period, source, region],
    queryFn: () => getFbbData({period, source, region}),
  });

  const isLoading = isLoadingMbb || isLoadingFbb;

  return (
    <div className='gap-1 bg-white h-full p-2 rounded-2xl flex flex-col'>

      <AnimatedCard
        isLoading={isLoading}
        className="flex-1 min-h-0 flex flex-col"
        skeleton={
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mt-2">
              <SkeletonText className="w-24 h-4" />
              <SkeletonBox className="w-16 h-6 rounded-2xl" />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 flex-1 min-h-0">
              <SkeletonBox className="h-full" />
              <SkeletonBox className="h-full" />
            </div>
          </div>
        }
      >
        {/* Statis: judul & selector, tidak bergantung fetch apapun, selalu tampil */}
        <div className='flex justify-between items-center mt-2'>
          <h1 className='text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold'>FBB&MBB Share</h1>
          <select 
          value={source}
          onChange= {(e) => setSource(e.target.value)}
          className='bg-slate-100 rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300 text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs'>
            <option value="meta">Meta</option>
            <option value="ookla">Ookla</option>
            <option value="onx">ONX</option>
          </select>
        </div>

        <div className='grid grid-cols-2 gap-2 mt-3 flex-1 min-h-0'>

          {/* MBB — error lokal, tidak menutupi kolom FBB di sebelahnya */}
          <div className=''>
            {isErrorMbb ? (
              <ErrorState message="Gagal memuat data MBB Share" />
            ) : (
              <ShareColumn
                title="MBB Share"
                color="purple"
                data={mbbData}
              />
            )}
          </div>

          {/* FBB — error lokal, tidak menutupi kolom MBB di sebelahnya */}
          <div>
            {isErrorFbb ? (
              <ErrorState message="Gagal memuat data FBB Share" />
            ) : (
              <ShareColumn
                title="FBB Share"
                color="blue"
                data={fbbData}
              />
            )}
          </div>

        </div>
      </AnimatedCard>
    </div>
  )
}

export default ShareCard