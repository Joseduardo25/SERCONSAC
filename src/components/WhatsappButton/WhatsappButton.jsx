'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function WhatsappButton() {
  const chatMessage = (
    <>
      ¡Hola!🤝<br />
      ¿Cómo podemos ayudarte?
    </>
  );
  return (
      <FloatingWhatsApp 
        className='text-black' 
        phoneNumber='+51928133695'
        accountName='Sofia'
        statusMessage='Generalmente responde en 1 hora'
        chatMessage={chatMessage}
      />
  )
}