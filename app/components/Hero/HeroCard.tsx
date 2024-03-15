'use client'
import React from 'react'
import Image from 'next/image';
import photo from '../../../public/images/dylan-nolte-dUsmF-F-bJg-unsplash-sm.jpg'



const HeroCard = (props: any) => {
  return (
    <>
    <div  className='bg-white p-3 my-3 shadow-md rounded-lg'>
      <ol id='heroCard' className='rounded-lg' >
        <li className='px-2'>
            <h3 className='text-[1.5rem] font-bold text-sky-950 underline p-1' >{props.heading}</h3>
            <p className='p-1 text-[.95rem] '>{props.paragraph}</p>
            <Image className='text-center p-2 mb-2' src={props.img} alt='pic' width={600} height={600}/>
        </li>
      </ol>    
    </div>
    </>
  )
}

export default HeroCard