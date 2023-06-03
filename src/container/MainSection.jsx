import { merge } from '@/utils/merge'
import React from 'react'

export default function MainSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div className=" mx-4 w-[95vw] min-h-[80vh] pl-14 bg-cyellow rounded-md shadow-md ] bg-[url('/assets/images/computer.png')] bg-no-repeat bg-right ">
                <div className='pt-11 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                    <h1>COMPUTER</h1>
                    <h1>ENGINEERING</h1>
                </div>

                <div className='py-11 text-4xl font-extrabold dark:text-white'>
                    <h2>Where Creativity Meets</h2>
                    <h2>Future Technology</h2>
                </div>

                <div className='py-11'>
                    <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                        button
                    </button>

                    <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                        button
                    </button>
                </div>
            </div>
        </div>
    )
}
