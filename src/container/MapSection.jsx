'use client'

import { merge } from '@/utils/merge'
import React, { useRef, useEffect, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import Image from 'next/image'
import google from '../../public/assets/images/Google.png'
import twitter from '../../public/assets/images/Twitter.png'
import facebook from '../../public/assets/images/Facebook.png'
import '@maptiler/sdk/dist/maptiler-sdk.css'
import * as maptilersdk from '@maptiler/sdk'

export default function MapSection({ id, className }) {
    //maptilersdk.config.apiKey = '1MQuOQseWDhmXaPlmz6j'

    /*const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,
        center: [112.79564308, -7.28266116], // starting position [lng, lat]
        zoom: 14, // starting zoom
    })*/

    const mapContainer = useRef(null)
    const [lng] = useState(112.79564308)
    const [lat] = useState(-7.28266116)
    const [zoom] = useState(10)
    const [API_KEY] = useState('1MQuOQseWDhmXaPlmz6j')

    useEffect(() => {
        const map = new maptilersdk.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom,
            navigationControl: 'top-right',
            geolocateControl: false,
        })

        const marker = new maptilersdk.Marker()
        marker.setLngLat([lng, lat])
        marker.addTo(map)

        return () => {
            marker.remove()
            map.remove()
        }
    })

    const [isHovering1, setIsHovered1] = useState(false)
    const onMouseEnter1 = () => setIsHovered1(true)
    const onMouseLeave1 = () => setIsHovered1(false)

    const [isHovering2, setIsHovered2] = useState(false)
    const onMouseEnter2 = () => setIsHovered2(true)
    const onMouseLeave2 = () => setIsHovered2(false)

    const [isHovering3, setIsHovered3] = useState(false)
    const onMouseEnter3 = () => setIsHovered3(true)
    const onMouseLeave3 = () => setIsHovered3(false)

    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div className="flex flex-col justify-center gap-5 md:flex-row">
                <div className="relative h-screen w-screen max-w-lg basis-1/2">
                    <div className="grid-row-4 grid gap-10">
                        <div className="static row-start-3 row-end-4 h-20 self-end">
                            <p className="text-cDark ml-10 mt-10 text-center font-display text-4xl font-extrabold">
                                keep in touch
                            </p>
                        </div>
                        <div className="static row-start-4 row-end-5 h-20 self-start">
                            <div className="flex justify-center gap-10">
                                <div
                                    className="basis-1/11 static ml-12 h-20 w-20"
                                    onMouseEnter={onMouseEnter1}
                                    onMouseLeave={onMouseLeave1}
                                >
                                    <a href="https://www.its.ac.id/komputer/id/beranda/">
                                        {isHovering1 ? (
                                            <Image src={google} alt="Google" width={50} height={50} priority={false} />
                                        ) : (
                                            <Image src={google} alt="Google" width={60} height={60} priority={false} />
                                        )}
                                    </a>
                                </div>
                                <div
                                    className="basis-1/11 static h-20 w-20"
                                    onMouseEnter={onMouseEnter2}
                                    onMouseLeave={onMouseLeave2}
                                >
                                    <a href="https://twitter.com/its_campus">
                                        {isHovering2 ? (
                                            <Image
                                                src={twitter}
                                                alt="Twitter"
                                                width={60}
                                                height={60}
                                                priority={false}
                                            />
                                        ) : (
                                            <Image
                                                src={twitter}
                                                alt="Twitter"
                                                width={70}
                                                height={70}
                                                priority={false}
                                            />
                                        )}
                                    </a>
                                </div>
                                <div
                                    className="basis-1/11 static h-20 w-20"
                                    onMouseEnter={onMouseEnter3}
                                    onMouseLeave={onMouseLeave3}
                                >
                                    <a href="https://id-id.facebook.com/InstitutTeknologiSepuluhNopember/">
                                        {isHovering3 ? (
                                            <Image
                                                src={facebook}
                                                alt="Facebook"
                                                width={50}
                                                height={50}
                                                priority={false}
                                            />
                                        ) : (
                                            <Image
                                                src={facebook}
                                                alt="Facebook"
                                                width={60}
                                                height={60}
                                                priority={false}
                                            />
                                        )}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen w-screen basis-1/2 p-10">
                    <div className="ml-5 box-border h-[19.75rem] w-[26rem] rounded-xl border-8 border-black/100">
                        <map ref={mapContainer}></map>
                    </div>
                </div>
            </div>
        </div>
    )
}
