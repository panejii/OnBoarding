import { useState,useEffect } from "react"

import ChurnCard from "./ChurnCard"
import FixedBroadCard from "./FixedBroadCard"
import MobileBroadCard from "./MobileBroadCard"
import RegionalCard from "./RegionalCard"
import PayloadCard from "./PayloadCard"

import { getRegionalData } from "../../../../services/regionalService"
import { AnimatedCard, SkeletonBox, SkeletonText } from "../../../../animation"

const RegionalSection = () => {

    const [regionalData, setRegionalData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            try{
                const data = await getRegionalData()
                setRegionalData(data)
            } catch (e){
                console.error(e)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    },[])

  return (
    <AnimatedCard
      isLoading={isLoading}
      className="h-full flex flex-col gap-3"
      skeleton={
        <div className="flex flex-col gap-3 h-full">
          <div className="grid grid-cols-5 bg-slate-50 mx-2 p-2 rounded-2xl border border-slate-200 gap-1">
            <SkeletonBox className="col-span-2 h-20" />
            <div className="col-span-3 space-y-2">
              <SkeletonText className="w-full h-4" />
              <SkeletonText className="w-full h-4" />
              <SkeletonText className="w-full h-4" />
            </div>
          </div>
          <SkeletonBox className="h-28" />
          <SkeletonBox className="h-28" />
          <SkeletonBox className="h-24 mx-2" />
        </div>
      }
    >
        <div className='grid grid-cols-5 bg-slate-50 mx-2 p-2 rounded-2xl border border-slate-200 items-center gap-1'>
            <div className='col-span-2'>
                <ChurnCard/>
            </div>
            <div className='col-span-3'>
                {regionalData.map((item) => (
                    <RegionalCard
                    key={item.id}
                    data={item}
                    />
                ))}
            </div>
        </div>

        <div className="">
            <FixedBroadCard/>
        </div>

        <div className="">
            <MobileBroadCard/>
        </div>

        <div className="px-2">
            <PayloadCard/>
        </div>
    </AnimatedCard>
  )
}

export default RegionalSection
