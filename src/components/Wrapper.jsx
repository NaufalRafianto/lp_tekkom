import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

export default function Wrapper({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
