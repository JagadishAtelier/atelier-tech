import FlawlessSection from '@/components/FlawlessSection'
import HeroDashboard from '@/components/HeroDashboard'
import HeroSection from '@/components/HeroSection'
import QualitySection from '@/components/QualitySection'
import React from 'react'

function Home() {
  return (
    <div>
        <HeroSection/>
        <HeroDashboard/>
        <FlawlessSection/>
        <QualitySection/>
    </div>
  )
}

export default Home