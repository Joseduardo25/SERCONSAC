import React from 'react'
import { Reveal } from '../Reveal'
import Link from 'next/link'

export const CtaDark = () => {
  return (
    <div className='px-6 my-20 md:mt-36'>
      <div className='max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl'>
        <div className='grid items-center text-white md:grid-cols-1'>
          <div className='my-8'>
            <Reveal>
              <h3 className='text-3xl font-bold'>Pruebas de Aceptación de SCI - Unidades de Proceso y Auxiliares de la Nueva Refinería Talara</h3>
            </Reveal>
            <Reveal>
              <p className='md:mt-6'>
                Realizamos de forma satisfactoria las pruebas de aceptación de SCI de todas las unidades de proceso y 
                auxiliares de la nueva refinería de Talara. Gracias a nuestro cliente Petro Perú por confiar en nuestro trabajo.
              </p>
            </Reveal>
          </div>
          {/* <Link href='#' className='px-4 py-3  mx-auto rounded-md bg-blueRadial'> */}
          <div className='mx-auto md: py-8'>
            <Reveal>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VlbH2mQhdcM?si=dwD4mWY3FQE9f6GK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Reveal>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
