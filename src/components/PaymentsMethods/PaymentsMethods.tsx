"use client"
import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CustomerData } from './Customers.data'
import Image from 'next/image'
import { CtaDark } from '../CtaDark'
import { Reveal } from '../Reveal'


export function PaymentsMethods() {
    return (
        <div id="NUESTROS-CLIENTES" className="bg-white relative pt-32 pb-20 md:py-64">
            <BackgroundRadialRight />
            <div className='mx-auto flex justify-center mb-32 text-center'>
                <Reveal>
                    <h2 className='text-5xl font-semibold text-black'>
                        NUESTROS CLIENTES
                    </h2>
                </Reveal>
            </div>
            <div className="relative w-full overflow-hidden">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                >
                    <div className="absolute flex">
                        {CustomerData.map(({ id, image }) => (
                            <SwiperSlide key={id} className="flex items-center slider-horizontal">
                                <Image src={`/assets/${image}`} alt="Payment" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
            <CtaDark />
        </div>
    )
}
