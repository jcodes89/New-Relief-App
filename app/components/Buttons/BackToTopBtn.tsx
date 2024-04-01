'use client'
import React from 'react'

const BackToTopBtn = () => {
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop(){
        if(!isBrowser()) return;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


  return (
    <button id='btn' type='button' role='button' aria-label='scrolls to the top of the page' onClick={scrollToTop} className='mx-[1rem] my-[.7rem] absolute ' >
        <i className="fa-solid fa-circle-arrow-up scale-[1.4] text-blue-400 hover:scale-[2]"/>
    </button>
  )
}

export default BackToTopBtn