// import React from 'react';

// const ShortListed = () => {
//     return (
//         <>
//             <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
//                 {/* Header */}
//                 <div className="flex flex-col items-center justify-center w-full mx-auto">
//                     <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
//                         Candidate Shortlisting Dashboard
//                     </h1>
//                     <div className="text-center text-muted-foreground w-full sm:w-3/4 md:w-2/3 md:text-lg mt-4">
//                         Here are the eligible candidates ranked by their matching percentage to your job requirements. This list is tailored to meet your specific needs, ensuring you see the most qualified candidates first.
//                     </div>
//                 </div>

//                 {/* Card Section */}
//                 <div className='flex flex-wrap justify-center gap-6'>
//                     {/* Card 1 */}
//                     <div className="card card-compact bg-white w-full sm:w-72 md:w-96 border-blue-500 shadow-xl">
//                         <figure className='mt-5'>
//                             <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
//                         </figure>
//                         <div className="card-body text-center">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//                         </div>
//                     </div>
//                     {/* Card 2 */}
//                     <div className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
//                         <figure className='mt-5'>
//                             <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
//                         </figure>
//                         <div className="card-body text-center">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//                         </div>
//                     </div>
//                     {/* Card 3 */}
//                     <div className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
//                         <figure className='mt-5'>
//                             <img src="/assets/Group 41.png" alt="Candidate" className="object-contain h-32 w-32" />
//                         </figure>
//                         <div className="card-body text-center">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//                         </div>
//                     </div>
//                 </div>

//                 {/* Candidate List */}
//                 <div className='w-full sm:w-3/4 lg:w-2/3 mx-auto'>
//                     <div className='flex flex-col space-y-4'>
//                         {/* Header Row */}
//                         <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
//                             <div className='w-1 bg-blue-600 h-full'></div>
//                             <div className='flex justify-around w-full text-xl font-bold'>
//                                 <div>S.No</div>
//                                 <div>Name</div>
//                                 <div>Percentage</div>
//                             </div>
//                         </div>

//                         {/* Candidate 1 */}
//                         <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
//                             <div className='w-1 bg-blue-600 h-full'></div>
//                             <div className='flex justify-around w-full text-xl'>
//                                 <div>01</div>
//                                 <div>XYZ</div>
//                                 <div>60%</div>
//                             </div>
//                         </div>

//                         {/* Candidate 2 */}
//                         <div className='flex items-center w-full bg-white h-16 border-2 border-[#AADEEF]'>
//                             <div className='w-1 bg-blue-600 h-full'></div>
//                             <div className='flex justify-around w-full text-xl'>
//                                 <div>02</div>
//                                 <div>ABC</div>
//                                 <div>40%</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ShortListed;
///////////////////////////////////////////////
"use client";
import React, { useEffect, useState } from 'react';

const ShortListed = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("shortlistedCandidates");
        if (data) {
            setCandidates(JSON.parse(data));
        }
    }, []);

    return (
        <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
                Candidate Shortlisting Dashboard
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
                {candidates.map((candidate, index) => (
                    <div key={index} className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">{candidate.name}</h2>
                            <p>Match Percentage: {candidate.score.toFixed(2)}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortListed;
//button resume view












































// "use client";
// import React, { useEffect, useState } from "react";

// const ShortListed = () => {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     const data = localStorage.getItem("shortlistedCandidates");
//     if (data) {
//       setCandidates(JSON.parse(data));
//     }
//   }, []);

//   const openResume = (resumeFile) => {
//     // Check if the resume is a string (URL or base64)
//     if (typeof resumeFile === "string") {
//       window.open(resumeFile, "_blank");
//     }
//     // Check if the resume is a File or Blob object
//     else if (resumeFile instanceof Blob) {
//       const fileUrl = URL.createObjectURL(resumeFile);
//       window.open(fileUrl, "_blank");
//     } else {
//       console.error("Resume file is not a valid type.");
//     }
//   };

//   return (
//     <div className="flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black">
//       <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
//         Candidate Shortlisting Dashboard
//       </h1>
//       <div className="overflow-x-auto">
//         <div className="space-y-6">
//           {candidates.map((candidate, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg shadow-lg p-6"
//             >
//               <div className="flex-1">
//                 <h2 className="text-xl font-semibold text-gray-800">{candidate.name}</h2>
//                 <p className="text-gray-600">Match Percentage: {candidate.score.toFixed(2)}%</p>
//                 <div className="mt-4">
//                   <button
//                     className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//                     onClick={() => openResume(candidate.resume)}
//                   >
//                     View Resume
//                   </button>
//                 </div>
//               </div>

//               <div className="w-full md:w-48">
//                 <button
//                   className="w-full bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition"
//                   onClick={() => openResume(candidate.resume)}
//                 >
//                   Open Resume
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShortListed;
