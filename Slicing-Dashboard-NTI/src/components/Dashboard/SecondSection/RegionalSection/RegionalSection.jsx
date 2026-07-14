import ChurnCard from "./ChurnCard"
import FixedBroadCard from "./FixedBroadCard"
import MobileBroadCard from "./MobileBroadCard"
import RegionalCard from "./RegionalCard"
import PayloadCard from "./PayloadCard"

import { regionalData } from "../../../../data/regionalData"

const RegionalSection = () => {
  return (
    <div  className=''>
        <div className='grid grid-cols-5 bg-slate-50 mx-2 p-2 rounded-2xl border border-slate-200'>
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
        
        <div className="">
            <PayloadCard/>
        </div>
    </div>
  )
}

export default RegionalSection