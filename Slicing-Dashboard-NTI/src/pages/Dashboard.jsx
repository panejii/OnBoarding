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
            <div className='ml-14 mt-3 bg-white py-1.5 pl-1.5 rounded-l-2xl'>

                {/* First Section */}

                <div className='my-2 ml-2 bg-slate-100 p-2 rounded-xl border border-slate-200'>
                    <Hero/>
                </div>

                {/* Second Section */}

                <div className='my-2 ml-2 bg-slate-100  rounded-xl border border-slate-200'>
                    <SecondSection/>
                </div>
            </div>



        </div>
        
    );
};


export default Dashboard