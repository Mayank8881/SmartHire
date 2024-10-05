"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="grid place-items-center">
        <form className="flex flex-col">
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button className="bg-blue-500">Login</button>

            {/* <div>
                Error Msg
            </div> */}
            <Link href={"/sign-up"}>
                Don't have account
                <span>Registered</span>
            </Link>
        </form>
    </div>
    </>
  )
}

export default page