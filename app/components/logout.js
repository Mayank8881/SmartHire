"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const logout = () => {
    const {data:session}=useSession();
  return (
    <div>
        <div>
            <button className='bg-red-600' onClick={()=> signOut()}>Logout</button>
        </div>
    </div>
  )
}

export default logout