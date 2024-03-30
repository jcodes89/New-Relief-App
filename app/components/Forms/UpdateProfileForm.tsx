'use client'
import React, {useEffect, useRef, useState} from 'react'
import FormLabel from './FormLabel'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const UpdateProfileForm = () => {
    const router = useRouter();
    const {data: session, status, update} = useSession()
    
    const [profileInfo, setProfileInfo] = useState({
        name: '',
        email: '',
        status: '',
        number: '',
        image: ''
    })

    function previousPage(){
        router.back()
    }

    function handleClick(e: any){
        e.preventDefault();

        update({
            name: profileInfo.name,
            email: profileInfo.email,
            status: profileInfo.status,
            number: profileInfo.number,
            image: profileInfo.image
        })
        
        router.refresh()
        alert('user has been updated successfully')
        
        setProfileInfo({
            name: '',
            email: '',
            status: '',
            number: '',
            image: ''
        })
    }

    function handleChange(e: any){
        const {value, name} = e.target;

        setProfileInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
 
  return (
    <>
        <div className='h-screen w-screen bg-slate-200 '>
            <section className=' '>
                <div className=''>
                    <div className="px-4 md:px-6 border-t w-full  h-screen flex flex-col items-center">
                        <h2 className='p-2 font-semibold border-2 border-b-yellow-300 '>Update Profile</h2>
                            <FormLabel
                                title='Full Name'
                                value={profileInfo.name}
                                placeholder='First and Last'
                                onChange={handleChange}
                                name='name'
                                autoComplete='name'
                            />
                            <FormLabel
                                title='Email'
                                value={profileInfo.email}
                                placeholder='Email'
                                onChange={handleChange}
                                name='email'
                                autoComplete='email'
                            />
                            <FormLabel
                                title='Status'
                                value={profileInfo.status}
                                placeholder="Active or Inactive"
                                onChange={handleChange}
                                name='status'
                                autoComplete='status'
                            />
                            <FormLabel
                                title='Phone Number'
                                value={profileInfo.number}
                                placeholder='Phone Number'
                                onChange={handleChange}
                                name='number'
                                autoComplete='number'
                            />
                            <div className='flex = pt-5 justify-center'> 
                                <button 
                                    className=' btn btn-square w-40 bg-yellow-300 text-sky-950 hover:bg-sky-950 hover:text-yellow-300 hover:scale-110' 
                                    onClick={handleClick}
                                    >Submit
                                </button>
                            </div>
                            <button onClick={previousPage} className=' btn btn-link  text-indigo-500 hover:text-red-500'>Go Back</button>
                    </div>
                </div>
            </section>
        </div>
    </>

  )
}

export default UpdateProfileForm