"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Logout = () => {
    const {data:session}=useSession();
  return (
    <div>
        <div>
            <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200 ease-in-out"  onClick={()=> signOut()}>Logout</button>
        </div>
    </div>
  )
}

export default Logout

// "use client"

// import { signOut } from "next-auth/react"

// export default function Logout() {
//   return (
//     <button
//       onClick={() => signOut({ callbackUrl: "/" })}
//       className="text-red-500 hover:text-red-700 block py-2 px-4 rounded-md text-sm"
//     >
//       Logout
//     </button>
//   )
// }



