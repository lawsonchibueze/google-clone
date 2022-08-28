import React from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Users() {
  const { data: session } = useSession()
  if (session) {
    console.log(session)
    return (
      <div className=' space-x-2'>
        <Image
          onClick={signOut}
          src={session.user.image}
          alt='image'
          height={50}
          width={50}
          className='hover:bg-gray-700 rounded-full'
        />
      </div>
    )
  }
  return (
    <>
      <button
        className='bg-blue-400 rounded-lg text-white p-2 hover:brightness-105'
        onClick={signIn}
      >
        {' '}
        Signin{' '}
      </button>
    </>
  )
}
