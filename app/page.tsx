import React, {lazy} from 'react'
import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import HeroMain from './components/Hero/HeroMain';
import HeroSub from './components/Hero/HeroSub';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/Buttons/BackToTopBtn';
import Image from 'next/image';
import img from '@/public/images/austin-kehmeier-lyiKExA4zQA-unsplash-large.webp'



export default function Home(props: any) {
  return (
    <>
    <HomeNavbar/>
    <section>
      <main className='hero'>
        <div className=' h-screen w-screen flex place-content-center items-center'>
          <Image loading='eager' src={img}   alt='image of hands joining each other'  className='opacity-50 z-0  absolute bg-no-repeat h-screen w-auto bg-cover xl:bg-contain bg-center '/>
          <HeroMain/>
        </div>
      </main>
    </section>
    <section className='h-screen w-screen'>
      <HeroSub/>
      <BackToTopBtn/>
      <Footer/>
    </section>
    </>
  )
}
