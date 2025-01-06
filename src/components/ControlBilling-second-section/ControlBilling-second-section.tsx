"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBillingSecondSection = () => {
  return (
    <div className='p-4 py-5 md:pt-5 md:pb-5'>
      <div className='flex flex-col md:flex-row max-w-5xl mx-auto md:flex-row place-content-evenly'>
        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
            PRUEBAS DE ACEPTACIÓN DE SISTEMAS CONTRA INCENDIOS
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
            Realizamos las pruebas de aceptación en presencia de la autoridad competente para su 
            aprobación. Contamos con amplia experiencia en este tipo de pruebas y logramos el objetivo 
            de nuestros clientes con pruebas satisfactorias de sus sistemas contra incendios.
            </p>
          </Reveal>
        </div>
        <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/acceptance-tests-v2.png' width={300} height={187} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition>
      </div>
    </div>
  )
}
