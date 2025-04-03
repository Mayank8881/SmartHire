
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// function Main() {
//     const router = useRouter();

//     const handleStartNowClick = () => {
//         router.push('/ResumeLanding');
//     };

//     const handleInterviewPrepClick = () => {
//         window.location.href = 'https://prep-ai-hazel.vercel.app/';
//     };

//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black">
//                 <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500 mt-0 lg:mt-0 md:mt-6">
//                     Simplify Your Hiring & Preparations!
//                 </h1>
//                 <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
//                     SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
//                 </div>
//             </div>

//             <div className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:space-x-8 mt-10 lg:mt-16'>

//                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl mb-10'>
//                     <Image src='/assets/Group 39.png' width={200} height={300} />
//                     <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
//                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
//                         Curating resumes efficiently to match top talent with organizational role.
//                     </div>
//                     <button 
//                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5" 
//                         onClick={handleStartNowClick}>
//                         Click Here
//                     </button>
//                 </div>

//                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl mb-10'>
//                     <Image src='/assets/Group 40.png' width={230} height={400} />
//                     <p className='text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
//                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
//                         AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
//                     </div>
//                     <button 
//                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5"
//                         onClick={handleInterviewPrepClick}>
//                         Click Here
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Main; 

// // "use client";
// // import React from 'react'
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';

// // function Main() {
// //     const router = useRouter();

// //     const handleStartNowClick = () => {
// //         router.push('/ResumeLanding');
// //     };

// //     return (
// //         <div>
// //             <div className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black">
// //                 <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500 mt-0 lg:mt-0 md:mt-6">
// //                     Simplify Your Hiring & Preparations!
// //                 </h1>
// //                 <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
// //                     SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
// //                 </div>
// //             </div>

// //             <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mt-10 lg:mt-16'>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl'>
// //                     <Image src='/assets/Group 39.png' width={200} height={300} />
// //                     <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         Curating resumes efficiently to match top talent with organizational role.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5" 
// //                         onClick={handleStartNowClick}>
// //                         Click Here
// //                     </button>
// //                 </div>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] mb-10 md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[480px] bg-[#DEF9FF] mt-16 rounded-xl mx-auto md:mx-4 lg:ml-40'>
// //                     <Image src='/assets/Group 40.png' width={230} height={400} />
// //                     <p className='text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5">
// //                         Click Here
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Main;

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, FileText, Users, Quote } from "lucide-react"

function Main() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleStartNowClick = () => {
    router.push("/ResumeLanding")
  }

  const handleInterviewPrepClick = () => {
    window.location.href = "https://prep-ai-hazel.vercel.app/"
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="flex flex-col items-center"
        >
          <Sparkles className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-blue-600">SmartHire</h2>
          <p className="text-blue-400 mt-2">Loading amazing experiences...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden mt-10">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black"
        >
          <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mt-0 lg:mt-0 md:mt-6">
            Simplify Your Hiring & Preparations!
          </h1>
          <p className="text-center text-slate-700 w-full md:w-3/4 md:text-xl mt-6 max-w-3xl">
            SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect
            candidates and for candidate interview preparation dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap- lg:gap-16 mt-16 lg:mt-10"
        >
          <Card className="w-[350px] md:w-[400px] lg:w-[450px] border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-blue-200/50 transition-all duration-300 group">
            <CardContent className="p-6 flex flex-col items-center ">
              <div className="relative w-64 h-64 mb-6 mt-4 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/Group 39.png"
                  alt="Resume Shortlisting"
                  width={210}
                  height={210}
                  className="object-contain"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl"
                />
              </div>

              <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
                Resume Shortlisting
              </h2>

              <p className="text-center text-slate-600 mb-6">
                Curating resumes efficiently to match top talent with organizational role.
              </p>

              <Button
                onClick={handleStartNowClick}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-6 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="w-[350px] md:w-[400px] lg:w-[450px] border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-blue-200/50 transition-all duration-300 group mt-8 lg:mt-0">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="relative w-64 h-64 mb-6 mt-4 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/Group 40.png"
                  alt="Interview Prep"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl"
                />
              </div>

              <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
                Interview Prep
              </h2>

              <p className="text-center text-slate-600 mb-6">
                AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
              </p>

              <Button
                onClick={handleInterviewPrepClick}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-6 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <span>Start Preparing</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Trusted by professionals worldwide</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <FileText className="h-5 w-5 text-blue-500" />
              <span className="text-slate-700">5000+ Resumes Processed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-slate-700">200+ Interview Preparations</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">What Our Users Say</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "John Doe",
                position: "HR Manager, XYZ Corp",
                text: "SmartHire completely transformed our hiring process. Its a game changer!",
                img: "/assets/user3.png",
              },
              {
                name: "Sarah Johnson",
                position: "Recruiter, ABC Ltd",
                text: "I love how seamless and efficient SmartHire is. It saves us so much time and effort!",
                img: "/assets/user1.png",
              },
              {
                name: "Michael Lee",
                position: "Hiring Lead, DEF Inc",
                text: "Using SmartHire, we found top talent quickly. The AI insights are incredibly helpful!",
                img: "/assets/user2.png",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="w-[320px] md:w-[400px] border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-blue-200/50 transition-all duration-300 p-6 flex flex-col items-center">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-4 border-blue-500"
                  />
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-center text-slate-600 italic mb-4">"{testimonial.text}"</p>
                  <h4 className="text-lg font-bold text-blue-700">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500">{testimonial.position}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Main

