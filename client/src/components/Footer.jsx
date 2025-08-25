import React from 'react'
import { assets } from '../assets/assets' 

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20'>
            <img src={assets.logo} alt='' width={150}/>
            <div flex >
                <img src={assets.instagram_icon} alt='' width={35}/>
            </div>
        </div>
    )
}

export default Footer
