"use client"
import Image from 'next/image'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'

export const ControlBillingThirdSection = () => {
  return (
    <div className='p-4 py-5 md:pt-5 md:pb-5'>
      <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
        <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src='/assets/foam-system-v2.png' width={380} height={187} alt='Control billing' className='w-full h-auto'/>
        </MotionTransition>
        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-3xl font-semibold'>
            SISTEMAS DE ESPUMA CONTRA INCENDIOS
              {/* <span className='block'>
                NORMATIVAS
              </span> */}
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-lg mt-10'>
            Realizamos pruebas de Proporcionamiento de espuma utilizando los diferentes medios de aplicación como cámaras de espuma, 
            lanzadores, generadores, entre otros. Asimismo, la recarga de tanques de bladder verticales y horizontales. <br/>
            Los concentrados de espuma contra incendios y polvo químico seco requieren de una prueba anual de determinación de calidad, 
            para ello contamos con un toda la logística y el personal capacitado para realizar esta actividad. Trabajamos con los principales 
            laboratorios de fabricantes de espuma en U.S.A.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
