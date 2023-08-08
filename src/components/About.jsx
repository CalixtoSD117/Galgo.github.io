import React from 'react'
import { almacen } from '../assets'

const About = () =>
{
    return (
        <div className='w-full bg-slate-50 pt-4 pb-4  md:pt-10 md:pb-10 '>
            <div className='lg:pr-20 lg:pl-20 pr-4 pl-4'>
                <h1 className='text-3xl md:text-5xl font-semibold text-gray-600  pb-2'>Sobre Nosotros</h1>
                <div className='pt-5 pb-5 flex flex-row items-center justify-between gap-4'>
                    <div className='w-full'>
                        <p className='text-justify text-sm lg:text-base'>
                            Al ser tu próximo freight forwarder, seremos responsables de que la mercancía de tu proveedor llegue a su destino el menor tiempo posible.
                            <br /><br />
                            Te apoyamos con servicios internacionales y nacionales, trabajando y cooperando con cientos de empresas para transformar tu cadena logística en un servicio integral.
                            <br /><br />
                            Brindamos soluciones de manera personalizada, atendiendo a las necesidades de cada proyecto y te asesoramos totalmente gratis y sin compromiso ofreciéndote la mejor ruta y medio de transporte que se ajusten a las necesidades de tu empresa optimizando nuestro servicio al cliente con un método único de comunicación interna para que siempre estés enterado de lo que pasa con tu embarque.
                        </p>
                    </div>
                    <div className='w-full hidden md:block'>
                           <img className='w-full h-72 object-cover rounded-md shadow-xl' src={almacen} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About