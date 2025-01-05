'use client'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { MotionTransition } from '../MotionTransition'
import { Reveal } from '../Reveal'
import { EffectCards } from 'swiper/modules'
import { dataChooseYourCards } from './ChooseYourCards.data'
import Image from 'next/image'

export const ChooseYourCards = () => {
  return (
    <div className='relative px-6 py-20 md:py-64' id='tarjetas'>
      {/* <BackgroundRadialRight/> */}
      <div className='block max-w-5xl mx-auto md:grid md:grid-cols-2'>
        <Reveal>
          <h2 className='text-5xl font-semibold'>Elige la tarjeta que más
            <span className='block degradedBlue bg-blueLight'>se adapta a tus necesidades</span>
          </h2>
        </Reveal>
        <div className='px-5'>
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {dataChooseYourCards.map(({id,image})=>{
                return(
                  <SwiperSlide key={id}>
                    <Image src={`/assets/${image}.png`} alt='Cards'width={400} height={300}/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}
