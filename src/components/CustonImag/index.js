import React from 'react'
import Image from 'next/image'
import Position from './index.style'


export default function CustonImage() {
    return (
    <div style={{margin:"36px 24px", display:"flex"}}>
    <Image src="/img/BookLogo.png" width={800/ 10} height={740/ 10}/>
    <Position>BOOKSTORE</Position>
    </div>
  )
}

