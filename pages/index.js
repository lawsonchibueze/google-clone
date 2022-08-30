import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return
    router.push(`/search?term = ${term.trim()}`)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />

      {/* Body */}
      <form className='flex flex-col items-center mt-40'>
        <Image
          src='https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw'
          alt='google image'
          className='object-cover w-52'
          width='300'
          height='150'
          objectFit='cover'
        />
        <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 text-gray-500' />
          <input ref={searchInputRef} type='text' className='flex-grow' />
          <MicrophoneIcon className='h-5 text-gray-500' />
        </div>
        <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
          <button onClick={search} className='bg-gray-100  p-3'>
            Google Search
          </button>
          <button className='bg-gray-100 p-3'>I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
