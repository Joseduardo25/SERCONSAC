"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBilling = () => {
  return (
    <div className='p-4 py-20 md:pt-64 md:pb5'>
      <div className='mx-auto flex justify-center mb-8'>
        <Reveal>
          <h2 className='text-5xl font-semibold'>
            PRINCIPALES SERVICIOS
          </h2>
        </Reveal>
      </div>
      <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
        {/* <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/control-business.png' width={580} height={411} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition> */}
        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
              IPM SISTEMAS CONSTRA 
              <span className='block'>
                INCENDIOS-NFPA 25
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
              Con la tarjeta de crédito adecuada, puede mejorar su vida financiera 
              generando crédito, obteniendo recompensas y ahorrando dinero. Pero 
              con cientos de tarjetas de crédito en el mercado
            </p>
          </Reveal>
        </div>
        <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/ipm-system.png' width={580} height={411} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition>
      </div>
    </div>
  )
}
