"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBilling = () => {
  return (
    <div id="SERVICIOS" className='p-4 pt-20 pb-5 md:pt-64 md:pb5'>
      <div className='mx-auto flex justify-center mb-8'>
        <Reveal>
          <h2 className='text-5xl font-semibold'>
            PRINCIPALES SERVICIOS
          </h2>
        </Reveal>
      </div>
      <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
        
      <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/ipm-system-v2.png' width={300} height={187} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition><div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
            INSPECCION, MANTENIMIENTO Y PRUEBAS
              <span className='block'>
              DE SISTEMA CONTRA INCENDIOS
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
            Nos encargamos de todas las labores de IPM de sistemas contra incendios 
            en base a agua y espuma conforme lo establecido en la normativa nacional 
            vigente, NFPA 25 y manuales de los fabricantes de cada sistema y/o equipo.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
