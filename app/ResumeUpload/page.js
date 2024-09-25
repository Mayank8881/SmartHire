"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

function ResumeUpload() {
    const router = useRouter();

    const handleStartNowClick = () => {
        router.push('/ShortListed');
    };

    return (
        <>
            <main className="flex-1 grid md:grid-cols-2 gap-6 px-4 sm:px-6 py-12 md:py-24 lg:py-32 xl:ml-20 lg:ml-10 sm:ml-10 -mt-20 text-black">
                <div className="space-y-4 mt-10 sm:mt-20 md:mt-32">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-blue-500">
                        Upload Resumes & Define Your Job Requirements
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
                        Please upload your resume and specify the job requirements for the role you're seeking or hiring for. 
                        Whether you're a candidate looking to showcase your skills or an employer in need of top talent, this is the place to get started. 
                        Make sure to include all relevant details to ensure a perfect match for the position.
                    </p>
                </div>

                <div className="w-full max-w-[500px] mx-auto md:max-w-[1200px] h-auto">
                    <img
                        src="/assets/Group 24.png"
                        alt="SmartHire"
                        className="w-full h-auto object-contain overflow-hidden rounded-xl"
                    />
                </div>
            </main>

            <div className="flex flex-col items-center justify-center w-full p-6">
                <div className="w-full max-w-[500px]  bg-white mt-6 rounded-xl px-6 py-6 mb-10 text-black">
                    <h2 className="text-2xl sm:text-3xl font-bold ">Upload Your Resume</h2>
                    <p className="mt-1 text-sm md:text-base">
                        Supported formats - pdf (max file size - 2MB).
                    </p>
                    <form className="mt-5 flex flex-col sm:flex-row gap-2">
                        <input type="file" className="file-input file-input-bordered h-10 w-full sm:max-w-xs" />
                    </form>
                    <button
                        onClick={handleStartNowClick}
                        className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 sm:mt-2 w-full sm:w-auto"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default ResumeUpload;
