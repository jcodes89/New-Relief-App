'use client'
import React from 'react';
import heroData from '../../data/HeroData';
import HeroCard from './HeroCard';


function createCard(data: any) {
    return (
      <HeroCard
        key={data.id}
        heading={data.heading}
        paragraph={data.paragraph}
        img={data.img}
      />
    )
  }

const HeroSub = () => {
  return (
    <div className=''>
        <div className='flex flex-col bg-slate-200  '>
            <header className=' items-center  pb-2 '>
                <h2 className='text-sky-950 font-bold text-[1.75rem] text-center underline bg-yellow-300 p-3 '>Why Volunteer?</h2>
            </header>
            <main className='px-4 mx-4 lg:grid lg:grid-cols-2 lg:gap-4 '>
                {heroData.map(createCard)}
            </main>
        </div>
    </div>
  )
}

export default HeroSub