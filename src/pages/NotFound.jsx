import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Ayşe Şahin</title>
            </Helmet>
            <div className='flex bg-[#380106] h-screen m-auto justify-items-center items-center'>
                <h1 className='text-7xl text-light text-center mx-auto'>404 Not Found</h1>
            </div>
        </>
    )
}

export default NotFound
