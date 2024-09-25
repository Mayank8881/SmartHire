import React from 'react';

const ShortListed = () => {
    return (
        <>
            <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
                {/* Header */}
                <div className="flex flex-col items-center justify-center w-full mx-auto">
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
                        Candidate Shortlisting Dashboard
                    </h1>
                    <div className="text-center text-muted-foreground w-full sm:w-3/4 md:w-2/3 md:text-lg mt-4">
                        Here are the eligible candidates ranked by their matching percentage to your job requirements. This list is tailored to meet your specific needs, ensuring you see the most qualified candidates first.
                    </div>
                </div>

                {/* Card Section */}
                <div className='flex flex-wrap justify-center gap-6'>
                    {/* Card 1 */}
                    <div className="card card-compact bg-white w-full sm:w-72 md:w-96 border-blue-500 shadow-xl">
                        <figure className='mt-5'>
                            <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
                        </figure>
                        <div className="card-body text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
                        <figure className='mt-5'>
                            <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
                        </figure>
                        <div className="card-body text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
                        <figure className='mt-5'>
                            <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
                        </figure>
                        <div className="card-body text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                        </div>
                    </div>
                </div>

                {/* Candidate List */}
                <div className='w-full sm:w-3/4 lg:w-2/3 mx-auto'>
                    <div className='flex flex-col space-y-4'>
                        {/* Header Row */}
                        <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
                            <div className='w-1 bg-blue-600 h-full'></div>
                            <div className='flex justify-around w-full text-xl font-bold'>
                                <div>S.No</div>
                                <div>Name</div>
                                <div>Percentage</div>
                            </div>
                        </div>

                        {/* Candidate 1 */}
                        <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
                            <div className='w-1 bg-blue-600 h-full'></div>
                            <div className='flex justify-around w-full text-xl'>
                                <div>01</div>
                                <div>XYZ</div>
                                <div>60%</div>
                            </div>
                        </div>

                        {/* Candidate 2 */}
                        <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
                            <div className='w-1 bg-blue-600 h-full'></div>
                            <div className='flex justify-around w-full text-xl'>
                                <div>02</div>
                                <div>ABC</div>
                                <div>40%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShortListed;
