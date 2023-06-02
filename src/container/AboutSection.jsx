import { merge } from '@/utils/merge'
import React from 'react'

export default function AboutSection({ id, className }) {
    return (
        <div id={id} className={merge('min-h-screen w-screen', className)}>
            <div>
                <div className="h-[31.25rem] w-[31.25rem] rounded-tl-full bg-cyellow" />
            </div>
        </div>
    )
}
