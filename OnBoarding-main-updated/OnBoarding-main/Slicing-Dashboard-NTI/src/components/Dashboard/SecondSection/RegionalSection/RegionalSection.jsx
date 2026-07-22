import { useQuery } from "@tanstack/react-query"

import ChurnCard from "./ChurnCard"
import FixedBroadCard from "./FixedBroadCard"
import MobileBroadCard from "./MobileBroadCard"
import RegionalCard from "./RegionalCard"
import PayloadCard from "./PayloadCard"

import { getRegionalData } from "../../../../services/regionalService"
import { AnimatedCard, SkeletonBox, SkeletonText } from "../../../../animation"
import ErrorState from "../../../ErrorState"

import { useFilterStore } from "../../../../store/useFilterStore"

const RegionalSection = () => {

    const { period, region } = useFilterStore()

    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["regionalData", period, region],
        queryFn: () => getRegionalData({ period, region }),
    })

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
        {isError ? (
            <ErrorState message="Gagal memuat data regional" />
        ) : (
            <>
                <div className='grid grid-cols-5 bg-slate-50 mx-2 p-2 rounded-2xl border border-slate-200 items-center gap-1'>
                    <div className='col-span-2'>
                        <ChurnCard data={data?.churn} />
                    </div>
                    <div className='col-span-3'>
                        {data?.cards.map((item) => (
                            <RegionalCard
                            key={item.id}
                            data={item}
                            />
                        ))}
                    </div>
                </div>

                <div className="">
                    <FixedBroadCard data={data?.fixedBroadband} />
                </div>

                <div className="">
                    <MobileBroadCard data={data?.mobileBroadband} />
                </div>

                <div className="px-2">
                    <PayloadCard data={data?.payload} />
                </div>
            </>
        )}
    </AnimatedCard>
  )
}

export default RegionalSection
