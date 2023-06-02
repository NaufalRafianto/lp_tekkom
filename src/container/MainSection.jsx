import { merge } from '@/utils/merge'
import Image from 'next/image'
import React from 'react'

export default function MainSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div className='bg-cyellow h-[609px] w-[95%] mx-auto rounded-md shadow flex'>
                <div className='w-1/2 h-full flex flex-col justify-center gap-8 bg-red-500' >
                    <div className='w-11/12 text-center'>
                        <h1>COMPUTER ENGINEERING</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>

                    <div>
                        <button>Sign in</button>
                        <button>teslljfas</button>
                    </div>
                </div>
                <div className='w-1/2 h-full bg-blue-500'>
                    <Image
                        src={'/assets/images/computer.png'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}
