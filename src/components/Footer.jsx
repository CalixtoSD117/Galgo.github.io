import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white lg:text-sm text-xs flex flex-col lg:flex-row justify-center lg:justify-between p-3 pr-2 pl-2 lg:pl-20 lg:pr-20 gap-2' >
      <div className='flex items-center justify-center text-center'>
            <span>Av Mariano Otero 1160, Jardines del Bosque, 44520 Guadalajara, Jal. México.</span>
        </div>
        <div className='flex items-center justify-center'>
            <span>© 2021 Galgo Forwarding – All rights reserved</span>
        </div>  
    </footer>
  )
}

export default Footer