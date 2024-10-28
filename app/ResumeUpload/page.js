"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function ResumeUpload() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [jobPrompt, setJobPrompt] = useState(""); // State for job prompt

  const handleJobPromptChange = (event) => {
    setJobPrompt(event.target.value); // Update job prompt state
  };

  const handleStartNowClick = () => {
    if (files.length >= 2 && jobPrompt.trim() !== "") {
      router.push("/ShortListed");
    } else if (files.length < 2) {
      alert("Please upload at least 2 files.");
    } else if (jobPrompt.trim() === "") {
      alert("Please provide a job prompt.");
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files); // Update files state with uploaded files
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    const response = await fetch("/api/resume-upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Resumes uploaded successfully!");
    } else {
      alert("Error uploading resumes.");
    }
  };

  return (
    <>
      <main className="flex-1 grid md:grid-cols-2 gap-6 px-4 sm:px-6 py-12 md:py-24 lg:py-32 xl:ml-20 lg:ml-10 sm:ml-10 -mt-20 text-black">
  <div className="space-y-4 mt-10 sm:mt-20 md:mt-32">
    <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-blue-500">
      Upload Resumes & Define Your Job Requirements
    </h1>
    <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
      Please upload your resume and specify the job requirements for the
      role you're seeking or hiring for. Whether you're a candidate
      looking to showcase your skills or an employer in need of top
      talent, this is the place to get started. Make sure to include all
      relevant details to ensure a perfect match for the position.
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
  <div className="w-full max-w-[500px] bg-white dark:bg-gray-800 mt-6 rounded-xl px-6 py-6 mb-10 text-black dark:text-white">
    <h2 className="text-2xl sm:text-3xl font-bold">Upload Your Resume</h2>
    <p className="mt-1 text-sm md:text-base">
      Supported formats - pdf, doc, docx (max file size - 2MB).
    </p>

    <form
      className="mt-5 flex flex-col gap-4 sm:gap-6"
      onSubmit={handleSubmit}
    >
      {/* Resume Upload Input */}
      <input
        type="file"
        className="file-input file-input-bordered h-10 w-full sm:max-w-xs dark:bg-gray-700 dark:text-white text-black"
        multiple
        accept=".pdf, .doc, .docx"
        onChange={handleFileChange}
      />

      {/* Uploaded Resume List */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-lg">Uploaded Resumes:</h3>
          <ul className="list-disc pl-5 mt-2">
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Job Prompt Input */}
      <textarea
        value={jobPrompt}
        onChange={handleJobPromptChange}
        className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
        placeholder="Enter your job requirements (e.g., skills, experience, and qualifications for the role)"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 sm:mt-2 w-full sm:w-auto"
      >
        Submit
      </button>

      <button
        type="button"
        onClick={handleStartNowClick}
        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4 sm:mt-2 w-full sm:w-auto"
      >
        Start Now
      </button>
    </form>
  </div>
</div>

    </>
  );
}

export default ResumeUpload;
