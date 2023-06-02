import { merge } from '@/utils/merge'
import React from 'react'

export default function AboutSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            AboutSection
        </div>
    )
}
