import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Dashboard/Hero/Hero';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-100">

            <Sidebar />

            <Navbar />
            
            {/* Chart Section */}
            <div className='ml-14 mt-3 bg-white p-1.5 rounded-2xl'>
                <div className='m-2 bg-slate-100 p-2 rounded-xl'>
                    <Hero/>
                </div>
            </div>

        </div>
    );
};


export default Dashboard