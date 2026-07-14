import MigrationSection from './MigrationSection/MigrationSection'
import RegionalSection from './RegionalSection/RegionalSection'
import MapSection from './map/MapSection'

const SecondSection = () => {
  return (
    <div className='grid grid-cols-12 mt-12'>
        <div className='col-span-5'>
            <MigrationSection/>
        </div>
        <div className='col-span-7 grid grid-cols-7'>
            
            <div className='col-span-3'>
                <RegionalSection/>
            </div>
            <div className='col-span-4'>
                <MapSection/>
            </div>
            
        </div>
    </div>
  )
}

export default SecondSection