"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBillingFourthSection = () => {
  return (
    <div className='p-4 pt-5 pb-20 md:pt-5 md:pb-64'>
      <div className='flex flex-col md:flex-row max-w-5xl mx-auto md:flex-row place-content-evenly'>
        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
            SISTEMAS DE DETECCIÓN Y ALARMA
              {/* <span className='block'>tu facturación</span> */}
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
            Inspección, prueba y mantenimiento de sistemas de detección y alarma convencionales 
            y direccionables en las diferentes marcas que existen en el mercado. Realizamos la 
            ingeniería e instalaciones para comercios y plantas industriales.
            </p>
          </Reveal>
        </div>
        <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/inspections-system-v2.png' width={300} height={150} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition>
      </div>
    </div>
  )
}
