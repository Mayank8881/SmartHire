// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// function ResumeUpload() {
//   const router = useRouter();
//   const [files, setFiles] = useState([]);
//   const [skills, setSkills] = useState("");
//   const [experience, setExperience] = useState("");
//   const [education, setEducation] = useState("");

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!skills.trim() || !experience.trim() || !education.trim()) {
//       alert("Please fill out all job requirements (skills, experience, and education).");
//       return;
//     }
  
//     const formData = new FormData();
//     files.forEach((file) => formData.append("files", file));
//     formData.append("skills", skills);
//     formData.append("experience", experience);
//     formData.append("education", education);
  
//     const response = await fetch(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`, {
//       method: "POST",
//       body: formData,
//     });
  
//     if (response.ok) {
//       console.log(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`);

//       const shortlistedCandidates = await response.json();
//       localStorage.setItem("shortlistedCandidates", JSON.stringify(shortlistedCandidates));
//       alert("Resumes processed successfully!");
//       router.push("/ShortListed"); // Navigate to ShortListed page after successful upload
//     } else {
//       alert("Error processing resumes.");
//     }
//   };
//   //myd56dgf98f

//   return (
//     <>
//       <main className="flex-1 grid md:grid-cols-2 gap-6 px-4 sm:px-6 py-12 md:py-24 lg:py-32 xl:ml-20 lg:ml-10 sm:ml-10 -mt-20 text-black">
//         <div className="space-y-4 mt-10 sm:mt-20 md:mt-32">
//           <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-blue-500">
//             Upload Resumes & Define Your Job Requirements
//           </h1>
//           <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
//             Please upload a folder containing resumes and specify the job requirements for the role you're seeking or hiring for. Ensure all details are provided for a perfect match.
//           </p>
//         </div>

//         <div className="w-full max-w-[500px] mx-auto md:max-w-[1200px] h-auto">
//           <img
//             src="/assets/Group 24.png"
//             alt="SmartHire"
//             className="w-full h-auto object-contain overflow-hidden rounded-xl"
//           />
//         </div>
//       </main>

//       <div className="flex flex-col items-center justify-center w-full p-6">
//         <div className="w-full max-w-[500px] bg-white dark:bg-gray-800 mt-6 rounded-xl px-6 py-6 mb-10 text-black dark:text-white">
//           <h2 className="text-2xl sm:text-3xl font-bold">Upload Your Resumes Folder</h2>
//           <p className="mt-1 text-sm md:text-base">
//             Supported formats - pdf, doc, docx (max file size per file - 2MB).
//           </p>

//           <form
//             className="mt-5 flex flex-col gap-4 sm:gap-6"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="file"
//               className="file-input file-input-bordered h-10 w-full sm:max-w-xs dark:bg-gray-700 dark:text-white text-black"
//               multiple
//               accept=".pdf, .doc, .docx"
//               webkitdirectory="true"
//               onChange={handleFileChange}
//             />

//             <textarea
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
//               placeholder="Enter required skills"
//             />
//             <textarea
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
//               placeholder="Enter required experience"
//             />
//             <textarea
//               value={education}
//               onChange={(e) => setEducation(e.target.value)}
//               className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
//               placeholder="Enter required education"
//             />

//             <button
//               type="submit"
//               className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 sm:mt-2 w-full sm:w-auto"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResumeUpload;

"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

function ResumeUpload() {
  const router = useRouter()
  const [files, setFiles] = useState([])
  const [skills, setSkills] = useState("")
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null) // null, 'success', 'error'
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!skills.trim() || !experience.trim() || !education.trim()) {
      setUploadStatus("error")
      setTimeout(() => setUploadStatus(null), 3000)
      return
    }

    if (files.length === 0) {
      setUploadStatus("error")
      setTimeout(() => setUploadStatus(null), 3000)
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    files.forEach((file) => formData.append("files", file))
    formData.append("skills", skills)
    formData.append("experience", experience)
    formData.append("education", education)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`, {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        console.log(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`)
        const shortlistedCandidates = await response.json()
        localStorage.setItem("shortlistedCandidates", JSON.stringify(shortlistedCandidates))
        setUploadStatus("success")
        setTimeout(() => {
          router.push("/ShortListed")
        }, 1500)
      } else {
        setUploadStatus("error")
        setTimeout(() => setUploadStatus(null), 3000)
      }
    } catch (error) {
      console.error("Error processing resumes:", error)
      setUploadStatus("error")
      setTimeout(() => setUploadStatus(null), 3000)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden pb-20">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <main className="container mx-auto px-4 py-12 relative z-10 mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Upload Resumes & Define Your Job Requirements
              </h1>
              <p className="text-slate-700 text-lg max-w-xl">
                Please upload a folder containing resumes and specify the job requirements for the role you're seeking
                or hiring for. Ensure all details are provided for a perfect match.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-[500px] mx-auto"
            >
              <img
                src="/assets/Group 24.png"
                alt="SmartHire"
                className="w-full h-auto object-contain rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center w-full mt-12"
          >
            <Card className="w-full max-w-[700px] border-none shadow-xl bg-white/90 backdrop-blur-sm mt-2">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-blue-600">Upload Your Resumes</CardTitle>
                <CardDescription>Supported formats - pdf, doc, docx (max file size per file - 2MB).</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-300 ${
                        files.length > 0
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/50"
                      }`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        accept=".pdf, .doc, .docx"
                        webkitdirectory="true"
                        onChange={handleFileChange}
                      />

                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Upload className="h-10 w-10 text-blue-500" />
                        <p className="text-lg font-medium">
                          {files.length > 0
                            ? `${files.length} file${files.length === 1 ? "" : "s"} selected`
                            : "Click to select resume folder"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {files.length > 0 ? "Click to change selection" : "or drag and drop files here"}
                        </p>
                      </div>
                    </div>

                    {files.length > 0 && (
                      <div className="mt-2 flex items-center text-sm text-blue-600">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>
                          {files.length} file{files.length === 1 ? "" : "s"} ready for upload
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="skills" className="text-base font-medium">
                        Required Skills
                      </Label>
                      <Textarea
                        id="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="Enter required skills (e.g., JavaScript, React, Node.js)"
                        className="mt-1 resize-none h-24"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-base font-medium">
                        Required Experience
                      </Label>
                      <Textarea
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter required experience (e.g., 3+ years in web development)"
                        className="mt-1 resize-none h-24"
                      />
                    </div>

                    <div>
                      <Label htmlFor="education" className="text-base font-medium">
                        Required Education
                      </Label>
                      <Textarea
                        id="education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="Enter required education (e.g., Bachelor's in Computer Science)"
                        className="mt-1 resize-none h-24"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-6 rounded-lg transition-all duration-300"
                      disabled={isUploading}
                    >
                      {isUploading ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing Resumes...
                        </div>
                      ) : (
                        "Submit Resumes"
                      )}
                    </Button>
                  </div>

                  {uploadStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-3 bg-green-100 text-green-700 rounded-md"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Resumes processed successfully! Redirecting...</span>
                    </motion.div>
                  )}

                  {uploadStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-3 bg-red-100 text-red-700 rounded-md"
                    >
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>Please fill out all fields and select resume files.</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  )
}

export default ResumeUpload

