import React from 'react'
import HeroBtn from './HeroBtn'
import { getServerSession } from 'next-auth'

const HeroMain = async () => {

  const session = await getServerSession()
  return (
    <div className=' relative z-20 text-center bg-sky-950 m-5 p-4 rounded-lg'>
      <h1 className='text-[1.75rem] text-yellow-300 font-bold '><q>Rising Together in Compassion and Service</q></h1>
      <h2 className='text-[1.0rem] text-slate-200 p-2 '>Join the Florida Disaster Relief - Where Volunteers Make a Difference!</h2>

      
      <HeroBtn
        href='/login'
        heroBtn='Become a Volunteer Today!'
      />
    </div>
  )
}

export default HeroMain