import React, { useEffect, useState } from 'react'
import { princi } from '../assets'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const array = ['Manejamos Cualquier Tipo de Proyecto', 'Expertos en el Ingreso de tu mercancia en el pais', 'Soluciones Logisticas Integrales']

const Principal = () =>
{

    const [paragraphCounter, setparagraphCounter] = useState(0)

    useEffect(() =>
    {

        const intervaltime = setInterval(() =>
        {
            setparagraphCounter((currentValue) =>
            {
                if (currentValue + 1 === array.length) {
                    return 0
                }

                return currentValue + 1
            });

            return () => clearInterval(intervaltime)
        }, 6000);


    }, [])


    return (
        <div className='flex relative'>
            <img className='object-cover w-full h-[370px] md:h-[400px] lg:h-[650px]' src={princi} alt="" />
            <div className='bg-black bg-opacity-30 w-full h-full absolute pr-5 pl-5  lg:pr-20 lg:pl-20'>
                <div className='w-full h-full flex flex-col text-center items-center justify-center gap-10'>
                    <SwitchTransition>
                        <CSSTransition classNames="fade" key={array[paragraphCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                            <h1 className='text-white text-2xl md:text-4xl lg:text-7xl font-semibold'>{array[paragraphCounter]}</h1>

                        </CSSTransition>
                    </SwitchTransition>
                    {/* <div className='flex flex-row gap-5'>
                        <a href="#contacto" className='text-white font-medium px-4 py-3 bg-slate-400 bg-opacity-90 rounded-md'>Contactanos</a>
                        <a href="#nuestros-servicios" className='text-white font-medium px-4 py-3 bg-red-800 bg-opacity-90 rounded-md'>Saber Mas</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Principal