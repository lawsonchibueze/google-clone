import React from 'react'
import Header from '../../components/Header'
import { getProviders, signIn } from 'next-auth/react'

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div mt-40>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='flex flex-col items-center'>
            <img
              src='https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw'
              alt='google image'
              className='object-cover w-52'
            />
            <p className='text-sm italic my-10 text-center'>
              This website is created for learning Purpose
            </p>
            <button
              className='bg-red-400 rounded-lg m-2 p-2 text-white hover:red-500'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
