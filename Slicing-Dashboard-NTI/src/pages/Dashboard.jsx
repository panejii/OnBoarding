    import React from 'react'
    import Navbar from '../components/Navbar'
    import Sidebar from '../components/Sidebar'
    import Hero from '../components/Dashboard/Hero/Hero';
    import SecondSection from '../components/Dashboard/SecondSection/SecondSection';

    const Dashboard = () => {
        return (
            <div className="min-h-screen bg-slate-100 ">

                <div className="fixed bottom-2 right-2 z-50 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
                    <span className="lg:hidden">base/sm/md</span>
                    <span className="hidden lg:inline xl:hidden">lg</span>
                    <span className="hidden xl:inline 2xl:hidden">xl</span>
                    <span className="hidden 2xl:inline">2xl</span>
                </div>

                <div className='font-barlow'>
                    <Sidebar />
                </div>

                <div className='font-geist'>
                    <Navbar />
                    
                    {/* Chart Section */}
                    <div className='ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 mt-2  bg-white rounded-l-2xl flex flex-col gap-2'>

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
                

                



            </div>
            
        );
    };


    export default Dashboard