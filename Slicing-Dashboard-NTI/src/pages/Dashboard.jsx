import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Dashboard/Hero/Hero';
import SecondSection from '../components/Dashboard/SecondSection/SecondSection';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-100">


            <Sidebar />

            <Navbar />
            
            {/* Chart Section */}
            <div className='ml-10 mt-2 bg-white rounded-l-2xl flex flex-col gap-2'>

                {/* First Section */}

                <div className=' ml-2 mt-2 bg-slate-100  rounded-xl border border-slate-200'>
                    <Hero/>
                </div>

                {/* Second Section */}

                <div className=' ml-2  bg-slate-100   rounded-xl border border-slate-200'>
                    <SecondSection/>
                </div>
            </div>



        </div>
        
    );
};


export default Dashboard