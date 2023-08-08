import React from 'react'

const Modal = ({ close, open, titlemodal, text }) =>
{

    if (!open) {
        return null
    }

    return (
        <div className='bg-black bg-opacity-30 w-full h-full fixed top-0 left-0 flex items-center justify-center z-50'>
            <div className='bg-white w-[350px] lg:w-[500px] absolute rounded-3xl p-2'>
                <div className='flex items-start justify-end pr-5'>
                <button className='text-3xl ' onClick={close}> x </button>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl'>{titlemodal}</h1>
                </div>
                <div className='pr-10 pl-10 text-justify pt-5 pb-5 text-base text-gray-600 font-light '>
                    <p>
                    {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal