"use client"
import CountUp from 'react-countup'
import { MotionTransition } from '../MotionTransition'
import { dataCounter } from './CounterData.data'
import './style.css'

export const CounterData = () => {

  return (
    <MotionTransition className='max-w-5xl py-10 mx-auto md:py-40 '>
      <div className=' justify-between md:flex'>
        {dataCounter.map(({id, startNumber, endNumber, text})=>(
          <div key={id} className='py-5 text-2xl text-center text-white flex md:text-left hidden_custom_number'>
            <div className='text-5xl pr-4 text-center'>
            +
            <CountUp start={startNumber} end={endNumber} duration={2} enableScrollSpy/>
            {' '}
            </div>
            <span className='degradedBlue bg-blueLight'>{text}</span> 
          </div>
        ))}
      </div>
    </MotionTransition>
  )
}
