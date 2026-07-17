import { useState,useEffect } from "react"

import ChurnCard from "./ChurnCard"
import FixedBroadCard from "./FixedBroadCard"
import MobileBroadCard from "./MobileBroadCard"
import RegionalCard from "./RegionalCard"
import PayloadCard from "./PayloadCard"

import { getRegionalData } from "../../../../services/regionalService"
import { AnimatedCard, SkeletonList } from "../../../../animation"

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
    <div  className='h-full flex flex-col gap-3'>
        <div className='grid grid-cols-5 bg-slate-50 mx-2 p-2 rounded-2xl border border-slate-200 items-center gap-1'>
            <div className='col-span-2'>
                <ChurnCard/>
            </div>
            <div className='col-span-3'>
                <AnimatedCard
                    isLoading={isLoading}
                    skeleton={<SkeletonList rows={3} />}
                >
                    {regionalData.map((item) => (
                        <RegionalCard
                        key={item.id}
                        data={item}
                        />
                    ))}
                </AnimatedCard>
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
    </div>
  )
}

export default RegionalSection
