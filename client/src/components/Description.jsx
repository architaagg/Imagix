import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
    return (
        <motion.div initial={{opacity:0.2, y:100}}  transition={{duration:1}}  whileInView={{opacity:1, y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images</h1>
            <p className='txt-gray-500 mb-8'>Turn your imagination into visuals</p>
            <div className='flex flex-col gap-5 md:flex-row items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI powered text to image generator</h2>
                    <p className='text-gray-600 mb-4'>Unleash the power of imagination with our AI-powered text-to-image generator. Simply type what’s on your mind, and watch as advanced artificial intelligence instantly transforms your words into stunning, high-quality visuals. Whether you’re a designer seeking fresh concepts, a content creator in need of unique assets, a marketer looking to grab attention, or just someone exploring creativity for fun — our platform makes the process effortless and inspiring. No design expertise is required; just your ideas and a few words are enough. With lightning-fast results, customizable styles, and limitless possibilities, our tool bridges the gap between creativity and technology, helping you turn visions into visuals in seconds.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
