import Wrapper from '@/components/Wrapper'
import AboutSection from '@/container/AboutSection'
import ActivitySection from '@/container/ActivitySection'
import CurriculumSection from '@/container/CurriculumSection'
import MainSection from '@/container/MainSection'
import MapSection from '@/container/MapSection'
import SpecializationSection from '@/container/SpecializationSection'
import React from 'react'
export default function Home() {
    return (
        <Wrapper>
            <h1>Home Page</h1>
            <MainSection id="#main" />
            <AboutSection id="about" />
            <SpecializationSection id="specialization" />
            <ActivitySection id="activity" />
            <CurriculumSection id="curriculum" />
            <MapSection id="map" />
        </Wrapper>
    )
}
