import MainSection from '@/container/MainSection'
import React from 'react'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <h1>Home Page</h1>
            <MainSection id="#main" />
        </main>
    )
}
