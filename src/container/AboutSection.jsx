import { merge } from '@/utils/merge'
import Image from 'next/image'
import React from 'react'

export default function AboutSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div className="mx-auto w-full max-md:-translate-y-20">
                <div className="relative my-20 text-center font-bold before:absolute before:left-10 before:top-3 before:h-px before:w-1/3 before:bg-cblue after:absolute after:right-10 after:top-3 after:h-px after:w-1/3 after:bg-cblue max-md:my-10 max-md:text-xs max-md:before:left-0 max-md:before:w-2/12 max-md:after:right-0 max-md:after:w-2/12">
                    Where Creativity Meets Future Technology
                </div>
            </div>
            <div className="mx-auto flex h-[75vh] w-3/4  space-x-5 max-md:mx-0 max-md:mt-20 max-md:w-full max-md:flex-col-reverse max-md:gap-5 max-md:pb-20">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="relative w-full pb-[56.25%] max-md:w-11/12 max-md:pb-[50%] md:h-full">
                        <iframe
                            className="absolute left-0 top-0 h-full w-full"
                            src="https://www.youtube.com/embed/jQ7Ar6DfdgM"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between max-md:w-full">
                    <div className="max-md-space-y-10 space-y-5 max-md:w-11/12">
                        <h1 className="text-center text-5xl font-black capitalize text-cblue max-md:text-3xl">
                            What is computer engineering?
                        </h1>
                        <p className="text-justify text-sm max-md:text-xs">
                            Teknik Komputer ITS mengajarkan disiplin ilmu yang memadukan software dari bidang ilmu
                            komputer dengan hardware dari bidang komputer, elektronika, dan telekomunikasi untuk
                            diaplikasikan pada sistem komputasi modern (Cloud Computing, Wireless Sensor Network, IoT/
                            Internet of Things, Wearable Device, dan Embedded System) maupun pada peralatan yang
                            dikontrol oleh komputer, dan jaringan dari perangkat cerdas, serta Robotika. Teknik Komputer
                            juga mempelajari pengolahan data skala besar (big data), keamanan data dan jaringan (network
                            security), dan komputasi multimedia.
                        </p>
                    </div>
                    <Image
                        src="https://www.its.ac.id/komputer/wp-content/uploads/sites/28/2020/05/Penelitian-Departemen-Teknik-Komputer-4-1.jpg"
                        width={500}
                        height={250}
                        className="max-md:mt-5 max-md:w-11/12"
                    />
                </div>
            </div>
        </div>
    )
}
