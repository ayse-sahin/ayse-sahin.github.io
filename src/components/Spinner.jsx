import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({ loading }) => {

    const style = {
        display: 'block',
        margin: '200px auto'
    }

    return (
        <ClipLoader 
            color='#4338CA'
            loading={loading}
            cssOverride={style}
            size={150}
        />
    )
}

export default Spinner
