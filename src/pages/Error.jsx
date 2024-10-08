import React from 'react'
import errorImage from "../assets/image/error.svg"
import { NavLink } from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <div className='text-red-600 text-center my-auto   w-[400px]     p-5  mx-auto' >
                <img src={errorImage} alt="error icon" width={200} height={200} className='mx-auto' />
                <div>
                    <h1 className='font-bold  text-9xl' >404</h1>
                    <p className='font-semibold text-4xl'> ERROR</p>
                    <p className='font-semibold text-4xl'>Sorry, page not found</p>
                </div>
                <div className='bg-[linear-gradient(135deg,_#fdc70c,_#f3903f,_#ed683c,_#e93e3a)] w-28 mx-auto rounded-xl mt-10 text-white p-2 font-semibold active:scale-95'>
                    <NavLink to={'/'}>BACK</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Error

