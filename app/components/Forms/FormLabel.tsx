import React from 'react'

const FormLabel = (props: any) => {
  return (
        <div className='p-2 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <label className=''>
                <div className='text-sm font-medium leading-6 text-sky-950'>{props.title}:</div>
                <input
                    className=' w-full textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0 selection:bg-yellow-300'
                    required 
                    type={props.type}
                    value={props.value} 
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    name={props.name}
                    autoComplete={props.autoComplete}
                    formAction={props.formAction}
                    ref={props.ref}
                />
            </label>
        </div>
  )
}

export default FormLabel;