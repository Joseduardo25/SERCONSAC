"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBillingFourthSection = () => {
  return (
    <div className='p-4 py-5 md:pt-5 md:pb-64'>
      <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
              Controla fácilmente
              <span className='block'>tu facturación</span>
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
          <Image src='/assets/foam-system.png' width={580} height={411} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition>
      </div>
    </div>
  )
}
