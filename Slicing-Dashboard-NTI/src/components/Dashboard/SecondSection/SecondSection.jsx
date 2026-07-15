import MigrationSection from './MigrationSection/MigrationSection'
import RegionalSection from './RegionalSection/RegionalSection'
import MapSection from './map/MapSection'
import Header from './Header'

const SecondSection = () => {
  return (

    <div >

        <div>
            <Header/>
        </div>

        <div className='grid grid-cols-12 mt-6 px-2 items-stretch'>
            <div className='col-span-4 h-full'>
                <MigrationSection/>
            </div>
            
            <div className='col-span-8 grid grid-cols-7 bg-white border border-slate-200 rounded-2xl p-3 h-full'>

                <div className='col-span-7 flex justify-between'>
                    <h1 className='text-2xl font-semibold px-3 py-3'>Evaluating Regional</h1>
                    <div>
                        
                    </div>
                </div>

                <div className='col-span-3 h-full'>
                    <RegionalSection/>
                </div>
                <div className='col-span-4 h-full'>
                    <MapSection/>
                </div>
            

            </div>
        </div>
    </div>
    
  )
}

export default SecondSection