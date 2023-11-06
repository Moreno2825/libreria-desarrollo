import React from 'react';
import Image from 'next/image';
import { Container, Details } from './index.style';

export default function ShoppingCartBook({image, name, author, price}) {
  return (
    <Container>
        <Image src={image} alt={name} width={150} height={150}/>
        <Details>
            <div>{name}</div>
            <div>{author}</div>
            <div className='price'>$ {price}.00 MX</div>
        </Details>
    </Container>
  )
}
