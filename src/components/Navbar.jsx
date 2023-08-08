import React, { useEffect, useState } from 'react'
import { galgo_logo, galiso, logsm } from '../assets'
import { links } from '../constants'
import { RiArrowRightSLine, RiCloseLine, RiMenuLine } from 'react-icons/ri'



const Navbar = ({ menu, menuopen, scrolling }) => {


  return (
    <nav className={`fixed w-full flex flex-row items-center justify-between pl-2 pr-2 lg:pl-20 pt-2 pb-3 lg:pr-20  z-40 transition-all ease-in-out duration-100 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent lg:p-4'}`}>
        <div>
            <img className={` object-cover hidden md:block transition-all ease-in-out duration-500 ${scrolling ? 'w-44' : 'w-14'}`} src={scrolling ? galgo_logo : galiso} alt="" />
            <img className={` object-contain md:hidden transition-all ease-in-out duration-100 ${scrolling ? 'w-44' : 'w-14'} `} src={scrolling ? galgo_logo : galiso} alt="" />
            
        </div>
        <div>
            <ul className='lg:flex flex-row items-center justify-center hidden gap-5'>
                {links.map((link)=>(
                    <li key={link.id}><a className={`text-lg font-semibold  px-1 py-1 rounded-md transition-all ease-in-out duration-500 ${scrolling ? 'hover:bg-slate-100 text-gray-700' : 'text-white hover:bg-gray-600 hover:bg-opacity-30'} `} href={link.idsec}>{link.title}</a></li>
                ))}
            </ul>

            <button className={`lg:hidden flex items-center justify-center  rounded-md px-2 py-2 ${scrolling ? 'bg-slate-100' : 'bg-slate-600 bg-opacity-25 text-white'}`} onClick={menu} >
                 {menuopen ? <RiCloseLine className='text-2xl'/> : <RiMenuLine className='text-2xl'/> }
            </button>            

        </div>
    </nav>
  )
}

export default Navbar