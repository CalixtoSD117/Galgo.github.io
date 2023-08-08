import React, { useState } from 'react'
import { almacen, bg1 } from '../assets'
import CardService from './CardService'
import Modal from './Modal'
import { ModalServices } from '../constants'


const Services = () =>
{
    const [modal, setmodal] = useState(false)

    const openModal = (cardmodalId) =>
    {
        setmodal(cardmodalId)
    }

    const closeModal = () =>
    {
        setmodal(false)
    }



    return (
        <>

            <div className='lg:pr-20 lg:pl-20 pr-2 pl-2 pt-4 pb-4 md:pt-10 md:pb-10'>
                <h1 className='text-4xl md:text-5xl text-red-700 font-semibold'>
                    Servicios Logisticos
                </h1>
                
                <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 place-items-center'>

                    {ModalServices.map((card) => (
                        <div key={card.id}>
                        <CardService openModal={() => openModal(card.id)} titlecard={card.titlecard_and_modal} imagen={card.img} />
                        <Modal  close={closeModal} open={modal === card.id} titlemodal={card.titlecard_and_modal} text={card.text} />
                    </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Services