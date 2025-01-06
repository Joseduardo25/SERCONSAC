"use client"
import Link from 'next/link'
import { BackgroundRadialLeft } from '../BackgroundRadialLeft'
import { Reveal } from '../Reveal'
import { dataFeaturesBusiness } from './BestBusiness.data'
import Image from 'next/image'

export const BestBusiness = () => {
  return (
    <div id="MISIÓN-Y-VISIÓN" className='relative px-6 py-20 text-white md:py-64'>
      {/* <BackgroundRadialLeft/> */}
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              <span className='block degradedBlue bg-blueLight md:mt-3'>MISIÓN</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-4 mb-10'>
            Brindar servicios de calidad cumpliendo los más altos estándares en protección contra incendio para salvaguardar la vida, 
            instalaciones de nuestros clientes y el medio ambiente.
            </p>
          </Reveal>
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
        </div>
        <div className='grid items-center py-10 md:px-8 md:py-0'>
          <Reveal>
            <h2 className='text-4xl font-semibold'>
              <span className='block degradedBlue bg-blueLight'>MÁS INFORMACIÓN</span>
            </h2>
          </Reveal>
          {
            dataFeaturesBusiness.map(({id, icon, title, description, link,image})=>(
              <Reveal key={id}>
                <a href={link} target='_blank' className='grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack cursor-pointer'>
                  <Image src={`/assets/${image}`} width={40} height={40} alt='Icon'/>
                  <div className='flex items-center justify-center' >
                    <h4 className='text-primary'>{title}</h4>
                    {/* <p className='text-primaryDark'>{description}</p> */}
                  </div>
                </a>
              </Reveal>
            ))
          }
        </div>
      </div>
    </div>
  )
}