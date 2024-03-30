
import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import HeroMain from './components/Hero/HeroMain';
import HeroSub from './components/Hero/HeroSub';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/Buttons/BackToTopBtn';




export default function Home(props: any) {
  return (
    <>
    <HomeNavbar/>
    <section>
      <main className='hero'>
        <div className=' h-screen w-screen flex place-content-center items-center'>
          <HeroMain/>
          <span className='opacity-50 z-0 bg-[url("../public/images/austin-kehmeier-lyiKExA4zQA-unsplash-small.jpg")] absolute bg-no-repeat h-screen w-screen bg-cover xl:bg-contain bg-center'/>
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
