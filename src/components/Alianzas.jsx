import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { RiCommunityLine, RiEarthFill, RiTeamLine } from "react-icons/ri";
import { p1, p2, p3, world } from '../assets';
import CardUser from './CardUser';
import { alianzasUsers } from '../constants';

const Alianzas = () =>
{
    return (
        <div className='bg-slate-50'>
            <div className='lg:pr-20 lg:pl-20 p-2 pt-10 pb-10'>

                <div className='md:mt-0 grid grid-cols-1 md:grid-cols-3 place-items-center gap-4'>
                    <VisibilitySensor partialVisibility offset={{ bottom: 1 }}>
                        {({ isVisible }) => (
                            <div className='p-2 text-2xl md:text-2xl text-slate-800 flex flex-col items-center gap-4 font-bold'>
                                <h1 className='flex flex-row items-center justify-center gap-2'>
                                    <RiCommunityLine /> Alianzas con empresas
                                </h1>
                                <span> {isVisible ? <CountUp end={50} /> : 0}+ </span>
                            </div>
                        )}
                    </VisibilitySensor>
                    <VisibilitySensor partialVisibility offset={{ bottom: 1 }}>
                        {({ isVisible }) => (
                            <div className='p-2 text-2xl md:text-2xl text-slate-800 flex flex-col items-center gap-4 font-bold'>
                                <h1 className='flex flex-row items-center justify-center gap-2'>
                                    <RiTeamLine /> Clientes
                                </h1>
                                <span> {isVisible ? <CountUp end={200} /> : 0}+ </span>
                            </div>
                        )}
                    </VisibilitySensor>
                    <VisibilitySensor partialVisibility offset={{ bottom: 1 }}>
                        {({ isVisible }) => (
                            <div className='p-2 text-2xl md:text-2xl text-slate-800 flex flex-col items-center gap-4 font-bold'>

                                <h1 className='flex flex-row items-center justify-center gap-2'>
                                    <RiEarthFill /> Paises involucrados
                                </h1>
                                <span> {isVisible ? <CountUp end={25} /> : 0}+ </span>
                            </div>
                        )}
                    </VisibilitySensor>
                </div>


                <div className='flex flex-col gap-5 md:flex-row justify-between items-start md:p-10 p-4 mt-10 bg-white rounded-lg shadow-md'>

                    <div className='md:w-2/4 w-full'>
                        <h1 className='text-xl md:text-3xl font-medium'>
                            Nosotros nos encargaremos de que la experiencia sea la mejor.
                        </h1>
                        <div className='md:mt-10 mt-5 flex flex-wrap gap-2 text-justify text-sm md:text-base'>
                            <ul className='list-inside list-disc flex flex-col gap-4'>
                                <li><span>Contamos Con experiencia en el mercado, ofreciendo un servicio de calidad y confianza.</span>
                                </li>
                                <li><span>Contamos con agencias aduanales en todo Mexico y en los principales puertos del mundo.</span>
                                </li>
                                <li><span>Manejamos varias soluciones logisticas para tu empresa, con el fin de que tu solo te enfoques en tu negocio.</span>
                                </li>
                            </ul>
                        </div>

                        <button className='py-2 px-3 ring-slate-800 hover:bg-slate-800 hover:text-white transition-all ease-in-out duration-500 ring-2 rounded-lg mt-5 md:mt-8 text-sm md:text-base'>
                            <a href="#contacto ">
                                Contactanos
                            </a>
                        </button>
                    </div>
                    <div className='md:w-8/12'>
                        <div className='grid grid-cols-2 gap-2'>
                            <img className='object-cover rounded-lg w-full h-full col-span-1 row-span-1' src={p1} alt="" />
                            <img className='object-cover rounded-lg w-full h-full col-span-1 row-span-1' src={p2} alt="" />
                            <img className='object-cover rounded-lg w-full h-52 col-span-2 row-span-2' src={p3} alt="" />
                        </div>
                    </div>
                    {/* {alianzasUsers.map((alianza) => (
<div key={alianza.id} className=''>
    <CardUser img={alianza.img} text={alianza.text} />
</div>
))} */}
                </div>

            </div>
        </div>
    )
}

export default Alianzas