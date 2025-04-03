// "use client";
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// const ShortListed = () => {
//     const [candidates, setCandidates] = useState([]);

//     useEffect(() => {
//         const data = localStorage.getItem("shortlistedCandidates");
//         if (data) {
//             setCandidates(JSON.parse(data));
//         }
//     }, []);

//     // Function to get initials from candidate name
//     const getInitials = (name) => {
//         return name
//             .split(' ')
//             .map(part => part[0])
//             .join('')
//             .toUpperCase();
//     };

//     // Function to generate a random color based on the candidate's name
//     const getRandomColor = (name) => {
//         // Use the name as a seed to generate a consistent color for each candidate
//         const stringToHash = (str) => {
//             let hash = 0;
//             for (let i = 0; i < str.length; i++) {
//                 hash = str.charCodeAt(i) + ((hash << 5) - hash);
//             }
//             return hash;
//         };

//         const hashToColor = (hash) => {
//             const colors = [
//                 "bg-red-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500", 
//                 "bg-blue-500", "bg-cyan-500", "bg-teal-500", "bg-green-500", 
//                 "bg-yellow-500", "bg-orange-500"
//             ];
            
//             // Use the hash to get a consistent index
//             const index = Math.abs(hash) % colors.length;
//             return colors[index];
//         };

//         return hashToColor(stringToHash(name));
//     };

//     return (
//         <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
//             <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
//                 Candidate Shortlisting Dashboard
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {candidates.map((candidate, index) => {
//                     const avatarColor = getRandomColor(candidate.name);
//                     return (
//                         <Card key={index} className="overflow-hidden">
//                             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//                                 <Avatar className="h-12 w-12">
//                                     <AvatarFallback className={`${avatarColor} text-white`}>
//                                         {getInitials(candidate.name)}
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 <CardTitle className="text-lg">{candidate.name}</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="space-y-2">
//                                     <div className="flex justify-between items-center">
//                                         <span className="text-sm text-gray-500">Match Score</span>
//                                         <span className="font-medium">{candidate.score.toFixed(2)}%</span>
//                                     </div>
//                                     <div className="w-full bg-gray-200 rounded-full h-2">
//                                         <div 
//                                             className="bg-blue-500 h-2 rounded-full" 
//                                             style={{ width: `${candidate.score}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ShortListed;
"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ShortListed = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("shortlistedCandidates");
        if (data) {
            setCandidates(JSON.parse(data));
        }
    }, []);

    // Function to extract just the filename from a path like "trainResumes/candidate_074.pdf"
    const getFileName = (path) => {
        // Split by '/' and get the last part
        const parts = path.split('/');
        return parts[parts.length - 1];
    };

    // Function to get initials from candidate filename
    const getInitials = (name) => {
        // Extract the candidate number from something like "candidate_074.pdf"
        const match = name.match(/candidate_(\d+)/i);
        return match ? `C${match[1]}` : name.substring(0, 2).toUpperCase();
    };

    // Function to generate a random color based on the candidate's name
    const getRandomColor = (name) => {
        // Use the name as a seed to generate a consistent color for each candidate
        const stringToHash = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        };

        const hashToColor = (hash) => {
            const colors = [
                "bg-red-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500", 
                "bg-blue-500", "bg-cyan-500", "bg-teal-500", "bg-green-500", 
                "bg-yellow-500", "bg-orange-500"
            ];
            
            // Use the hash to get a consistent index
            const index = Math.abs(hash) % colors.length;
            return colors[index];
        };

        return hashToColor(stringToHash(name));
    };

    return (
        <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
                Candidate Shortlisting Dashboard
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidates.map((candidate, index) => {
                    const fileName = getFileName(candidate.name);
                    const avatarColor = getRandomColor(fileName);
                    return (
                        <Card key={index} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback className={`${avatarColor} text-white`}>
                                        {getInitials(fileName)}
                                    </AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-lg">{fileName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Match Score</span>
                                        <span className="font-medium">{candidate.score.toFixed(2)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-500 h-2 rounded-full" 
                                            style={{ width: `${candidate.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ShortListed;
