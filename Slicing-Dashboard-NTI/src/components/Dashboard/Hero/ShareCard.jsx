import React from 'react'
import ShareColumn from './ShareColumn'

const ShareCard = () => {
  return (
    <div className='gap-3 bg-white h-full p-3 rounded-2xl'>
      
      <div className='flex justify-between mt-3'>
        <h1 className='text-xl font-semibold'>FBB&MBB Share</h1>
        <select className='bg-slate-100 rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-slate-300 duration-300'>
          <option value="">Meta</option>
          <option value="">Non-Meta</option>
        </select>

      </div>
      
      <div className='items-center gap-3 mt-6 grid grid-cols-2'>

        {/* MBB */}

        <div>
          <ShareColumn/>
        </div>

        {/* FBB */}

        <div>
          <ShareColumn/>
        </div>

      </div>
    </div>
  )
}

export default ShareCard