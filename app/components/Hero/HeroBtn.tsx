'use client'
import Link from 'next/link'
import React from 'react'

const HeroBtn = (props: any) => {
  return (
    <Link href={props.href} className='btn m-4 text-sky-950 hover:text-sky-950 hover:bg-yellow-300 hover:scale-105'>
        {props.heroBtn}
    </Link>
  )
}

export default HeroBtn