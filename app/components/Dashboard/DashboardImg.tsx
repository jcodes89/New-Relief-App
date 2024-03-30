import React from 'react'
import dashboardImg from '@/public/images/remi-walle-UOwvwZ9Dy6w-unsplash.jpg'
import Image from 'next/image'

const DashboardImg = () => {
  return (
    <div className="w-screen">
      <Image className="h-[7.5rem] object-cover w-full" src={dashboardImg} alt="image of hands together"/>
    </div>
  )
}

export default DashboardImg