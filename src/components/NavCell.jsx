import React from 'react'
import { links } from '../constants'

const NavCell = ({menuopen,menu,scrolling}) => {
  return (
    <nav className={`fixed shadow-md z-50 flex justify-center items-center rounded-r-full translate-y-1/2 h-52 w-48 xs:w-44 md:w-1/4 m-0 p-0 transition-all ${menuopen ? 'left-0' : '-left-full  '} ${scrolling ? 'bg-white': 'bg-red-700 bg-opacity-95' } `}>
        <ul className='flex flex-col gap-3'>
                {links.map((link)=>(
                    <li key={link.id}><a className={`text-lg font-semibold  px-1 py-1 rounded-md  ${scrolling ? 'hover:bg-slate-100 text-gray-700' : 'text-white'}`} href={link.idsec} onClick={menu}>{link.title}</a></li>
                ))}
            </ul>
    </nav>
  )
}

export default NavCell