import React from 'react'

const ShortListed = () => {
    
    return (
        <>
            <div className='flex-col  space-y-10 p-7 mt-5 text-black'>
                <div>
                    <div className="flex flex-col items-center justify-center w-full mx-auto">
                        <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Candidate Shortlisting Dashboard</h1>
                        <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
                            Here are the eligible candidates ranked by their matching percentage to your job requirements. This list is tailored to meet your specific needs, ensuring you see the most qualified candidates first.
                        </div>
                    </div>
                </div>


                <div className='flex col-span-3 gap-6 justify-center text-black'>

                    <div className="card card-compact bg-white w-96 border-blue-500 shadow-xl">
                        <figure className='mt-5'>
                            <img
                                src="/assets/Group 41.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            {/* //// */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="card card-compact  w-96 shadow-xl bg-white">
                        <figure className='mt-5'>
                            <img
                                src="/assets/Group 41.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            {/* //// */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-96 shadow-xl">
                        <figure className='mt-5'>
                            <img
                                src="/assets/Group 41.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className='ml-56 text-xl space-y-0.5 w-[1000px] items-center font-bold'>
                    <div className='flex '>
                        <div className='w-2 bg-blue-600'></div>
                        <div className=' text-xl bg-white space-y-0.5 w-[1000px] font-bold flex justify-around h-16 items-center border-2 border-[#AADEEF]'>
                            <div>S.No</div>
                            <div>Name</div>
                            <div>percentage</div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-2 bg-blue-600'></div>
                        <div className=' text-xl bg-white space-y-0.5 w-[1000px]  flex justify-around h-16 items-center border-2 border-[#AADEEF]'>
                            <div>01</div>
                            <div>XYZ</div>
                            <div>60%</div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-2 bg-blue-600'></div>
                        <div className=' text-xl bg-white space-y-0.5 w-[1000px]  flex justify-around h-16 items-center border-2 border-[#AADEEF]'>
                            <div>02</div>
                            <div>ABC</div>
                            <div>40%</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShortListed;