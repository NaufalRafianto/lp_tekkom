import { merge } from '@/utils/merge'
import React from 'react'

export default function MainSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div className=" ] mx-4 min-h-[80vh] w-[95vw] rounded-md bg-cyellow bg-[url('/assets/images/computer.png')] bg-right bg-no-repeat pl-14 shadow-md ">
                <div className="mb-4 pt-11 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <h1>COMPUTER</h1>
                    <h1>ENGINEERING</h1>
                </div>

                <div className="py-11 text-4xl font-extrabold dark:text-white">
                    <h2>Where Creativity Meets</h2>
                    <h2>Future Technology</h2>
                </div>

                <div className="py-11">
                    <button className="mb-2 mr-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        button
                    </button>

                    <button className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        button
                    </button>
                </div>
            </div>
        </div>
    )
}
