import MigrationSection from './MigrationSection/MigrationSection'
import RegionalSection from './RegionalSection/RegionalSection'
import MapSection from './map/MapSection'
import Header from './Header'
import { StaggerContainer, StaggerItem, AnimatedCard, SkeletonText } from '../../../animation'

const SecondSection = () => {
  return (

    <div>

        <div>
            <Header/>
        </div>

        <StaggerContainer className='grid grid-cols-12 mt-2 xl:mt-3 2xl:mt-4 px-2 items-stretch' stagger={0.12}>
            <StaggerItem className='col-span-4 h-full'>
                <MigrationSection/>
            </StaggerItem>

            <StaggerItem className='col-span-8 grid grid-cols-7 bg-white border border-slate-200 rounded-2xl p-1 lg:p-2 xl:p-3 2xl:p-4 h-full'>

                <div className='col-span-7 flex justify-between'>
                    <AnimatedCard
                        skeleton={<SkeletonText className="w-40 h-6 my-1" />}
                    >
                        <h1 className='text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold px-1 py-1'>Evaluating Regional</h1>
                    </AnimatedCard>
                </div>

                <div className='col-span-3 h-full'>
                    <RegionalSection/>
                </div>
                <div className='col-span-4 h-full'>
                    <MapSection/>
                </div>


            </StaggerItem>
        </StaggerContainer>
    </div>

  )
}

export default SecondSection
