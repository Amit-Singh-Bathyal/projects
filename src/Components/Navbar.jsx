import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-black text-white py-2'>
            <div className='logo'>
                <span className='font-bold text-xl mx-4'>To do</span>
            </div>
            <ul className='flex gap-8 px-3'>
                <li className='cursor-pointer text-white hover:text-sky-300 hover:font-bold tarnsition-all'>Home</li>
                <li className='cursor-pointer text-white hover:text-sky-300 hover:font-bold transition-all'>Tasks</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar