import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-100">

            <Sidebar />

            <Navbar />
            
            {/* Chart Section */}
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    );
};


export default Dashboard