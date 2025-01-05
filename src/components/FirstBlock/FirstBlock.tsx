"use client"
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'
import Image from 'next/image'
import Link from 'next/link'

export const FirstBlock = () => {
  return (
    <div id="SOBRE-NOSOTROS" className='relative p-4 h-screen md:py-40'>
      {/* <BackgroundRadialRight/> */}
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h1 className='text-5xl font-semibold'>
              SOBRE NOSOTROS
              <span className='block degradedBlue bg-blueLight'>
                SERCONSAC
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>SOMOS UNA EMPRESA PERUANA DEDICADA A BRINDAR SERVICIOS DE PROTECCION CONTRA INCENDIOS EN EL SECTOR INDUSTRIAL Y OIL GAS BAJO LAS NORMATIVAS NACIONALES E INTERNACIONALES.
            </p>
          </Reveal>
          {/* <Reveal>
            <div className='my-8'>
              <Link href='#clients' className='px-4 py-3 rounded-md bg-blueRadial'>Empieza ahora</Link>
            </div>
          </Reveal> */}
        </div>
        <MotionTransition className='flex items-center justify-center pt-12 md:pt-0 '>
          <Image src='/assets/pipes-red-v2.png' alt='Card Payment' width={450} height={450} className='h-auto w-72 md:w-full'/>
        </MotionTransition>
      </div>
    </div>
  ) 
}