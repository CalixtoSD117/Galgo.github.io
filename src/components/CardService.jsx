import React from 'react'
import { bg1 } from '../assets'
import { RiArrowRightLine } from "react-icons/ri";

const CardService = ({openModal, imagen, titlecard}) =>
{
    return (
        <>
            <div className='mt-4 md:mt-8 flex w-60 xxs:w-80 sm:w-60 md:w-60 lg:w-[285px] xl:w-80  relative rounded-lg shadow-xl'>
                <img className='w-full h-52 rounded-lg object-cover' src={imagen} alt="" />
                <div className='bg-black bg-opacity-30 absolute w-full h-full rounded-lg flex flex-col gap-2 justify-center items-start pl-4'>
                    <h1 className='text-2xl md:text-3xl font-medium text-white'>
                        {titlecard}
                    </h1>
                    <button className='text-white font-sans bg-black bg-opacity-50 px-2 rounded-md flex items-center ' onClick={openModal}>Ver Mas <span>.</span></button>
                </div>
            </div>
        </>
    )
}

export default CardService