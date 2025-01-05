"use client"
import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";


export function Footer() {
  return (
    <div className='max-w-5xl mx-auto p-6 mt-10 md:mt-40'>
      <div className='justify-start md:flex'>
        <div className="md:px-8">
          <Image src="/assets/logo-serconsac-v2.png" width={200} height={40} alt='Logo Bank'/>
          {/* <Reveal>  
            <p className='mt-5 text-primaryDark max-w-[250px]'>Una nueva forma de hacer pagos de forma sencilla</p>
          </Reveal> */}
        </div>
        {footerData.map(({id, title, links})=>(
          <div key={id} className="text-black">
            <h4 className='mt-8 text-lg md:mt-0 pt-3'>
              <Reveal>{title}</Reveal>
            </h4>
            {links.map(({id, name})=>(
              <div 
                key={id} 
                // href={link} 
                className='block !text-black mt-4 text-primaryDark hover: text-white'>
                <Reveal>
                  {name}
                </Reveal>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='border-[#3F3E45] border-[1px] my-7'/>
      <div className='items-center justify-center md:flex'>
        <div className='my-3'>
          <Reveal>
            2025 Serconsac. All Rights Reserved
          </Reveal>
        </div>
        {/* <div className='flex gap-5'>
          {footerSocialNetworks.map(({id, icon, link})=>(
            <div key={id}>
              <Reveal>
                <Link href={link} className='text-2xl'>{icon}</Link>
              </Reveal>
            </div>
          ))}
        </div> */}
      </div>  
    </div>
  )
} 
