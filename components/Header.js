import React from 'react'
import Users from './Users'

const Header = () => {
  return (
    <header className='flex justify-between p-5 text-gray-700'>
      {/* Left About and Stor */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>

      {/* Right gmail & Images */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <Users />
      </div>
    </header>
  )
}

export default Header
