'use client'
import React from 'react'
import Image from 'next/image';

const HeroCard = (props: any) => {
  return (
    <>
      <div  className='bg-white p-3 my-3 shadow-md rounded-lg'>
        <ol id='heroCard' className='rounded-lg' >
          <li className='px-2 flex flex-col items-center'>
              <h3 className='text-[1.5rem] font-bold text-sky-950 underline p-1' >{props.heading}</h3>
              <p className='p-1 text-sm md:text-md lg: 2xl:w-1/2  '>{props.paragraph}</p>
              <Image className='text-center p-2 mb-2' src={props.img} alt='pic' width={600} height={600}/>
          </li>
        </ol>    
      </div>
    </>
  )
}

export default HeroCard