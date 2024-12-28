"use client"
import Link from 'next/link'
import { BackgroundRadialLeft } from '../BackgroundRadialLeft'
import { Reveal } from '../Reveal'
import { dataFeaturesBusiness } from './BestBusiness.data'
import Image from 'next/image'

export const BestBusiness = () => {
  return (
    <div className='relative px-6 py-20 md:py-64'>
      <BackgroundRadialLeft/>
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              <span className='block degradedBlue bg-blueLight'>MISIÓN</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-4 mb-10'>
            Brindar servicios de calidad cumpliendo los más altos estándares en protección contra incendio para salvaguardar la vida, 
            instalaciones de nuestros clientes y el medio ambiente.
            </p>
          </Reveal>
          {/* <Reveal>
            <div className='my-8'>
              <Link href='#clients' className='px-4 py-3 rounded-md bg-blueRadial'>
                Elije tu plan
              </Link>
            </div>
          </Reveal> */}
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              <span className='block degradedBlue bg-blueLight'>VISIÓN</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-4'>
            Ser una de las principales empresas en desarrollos de proyectos de ingeniería y proveedor 
            líder en servicios y productos para la lucha contra incendios.
            </p>
          </Reveal>
          {/* <Reveal>
            <div className='my-8'>
              <Link href='#clients' className='px-4 py-3 rounded-md bg-blueRadial'>
                Elije tu plan
              </Link>
            </div>
          </Reveal> */}
        </div>
        <div className='grid items-center py-5 md:p-8'>
          {
            dataFeaturesBusiness.map(({id, icon, title, description})=>(
              <Reveal key={id}>
                <div className='grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack'>
                  <Image src={`/assets/${icon}.png`} width={40} height={40} alt='Icon'/>
                  <div>
                    <h4 className='text-primary'>{title}</h4>
                    <p className='text-primaryDark'>{description}</p>
                  </div>
                </div>
              </Reveal>
            ))
          }
        </div>
      </div>
    </div>
  )
}