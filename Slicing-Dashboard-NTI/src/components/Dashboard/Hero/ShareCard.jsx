import { useState,useEffect } from 'react'
import ShareColumn from './ShareColumn'

import { getMbbData } from '../../../services/mbbService'
import { getFbbData } from '../../../services/fbbService'

const ShareCard = () => {

  const [fbbData, setFbbData] = useState([]);
  const [mbbData, setMbbData] = useState([]);

  useEffect (() => {
    async function loadData(){
      try{
        const[mbb,fbb] = await Promise.all([
          getMbbData(),
          getFbbData(),
        ])

        setFbbData(fbb)
        setMbbData(mbb)
      } catch(error){
        console.error(error)
      }
    }

    loadData()
  },[]) 

  return (
    <div className='gap-1 bg-white h-full p-2 rounded-2xl'>
      
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-[12px] font-semibold'>FBB&MBB Share</h1>
        <select className='bg-slate-100 rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300 text-[8px]'>
          <option value="">Meta</option>
          <option value="">Non-Meta</option>
        </select>

      </div>
      
      <div className='items-center gap-2 mt-3 grid grid-cols-2'>

        {/* MBB */}

        <div>
          <ShareColumn
            title="MBB Share"
            color="purple"
            data= {mbbData}
          />
        </div>

        {/* FBB */}

        <div>
          <ShareColumn
            title="FBB Share"
            color="blue"
            data= {fbbData}
          />
        </div>

      </div>
    </div>
  )
}

export default ShareCard