'use client'

import { useState } from "react"
import AvatarModal from "./AvatarModal"

const Modal = () => {

  const [modalOpen, setModalOpen] = useState(false)
    
  function handleClick(){
    setModalOpen(true)
  }
 

  return (
    <>
        <div className=" text-center ">  
            <button id="add_after" type="button" onClick={handleClick}>
                <i  className="fa-solid fa-pencil bg-yellow-300 outline outline-sky-950 p-3 rounded-full scale-75 hover:scale-90" ></i>
            </button>
        </div>
        {/* {modalOpen && <AvatarModal closeModal={() => {setModalOpen(false)}}/>} */}
    </>
  )
}

export default Modal