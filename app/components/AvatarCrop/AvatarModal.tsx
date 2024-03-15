import React, { useState } from 'react'
import ReactCrop from 'react-image-crop';

const ASPECT_RATIO = 1
const MIN_DIMENSION = 150

const AvatarModal = ({closeModal}: any) => {

  const [imageSrc, setImageSrc] = useState('')
  const [crop, setCrop] = useState()

  function onSelectFile(e: any){
    const file = e.target.files?.[0];
    
    if(!file) return;

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageUrl = reader.result?.toString() || ''
      setImageSrc(imageUrl)
      
    })
    reader.readAsDataURL(file);
    
  }

  function handleClick(){
    console.log(imageSrc);
    
  }


  return (


    <div className=' absolute z-10 left-14 p-4 bg-red-600'>
      <div className=' h-screen w-screen'>
        <label>
          <span>Choose a profile pic</span>
          <input
            name='image'
            type='file'
            accept='image/*'
            className='p-1 block text-white'
            onChange={onSelectFile}
          />
          <button type='submit' className='btn m-2' onClick={handleClick}>submit</button>
          <button onClick={closeModal} className='p-4 btn'>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </label>
        {imageSrc && 
          <div className='flex flex-col items-center'>
            <ReactCrop 
              crop={crop}
              circularCrop
              keepSelection
              aspect={ASPECT_RATIO}
              minWidth={MIN_DIMENSION}
            >
              <img src={imageSrc} alt='upload' className=''/>
            </ReactCrop>
          </div>
        }
      </div>
    </div>
  )
}

export default AvatarModal