import FlawlessSection from '@/components/FlawlessSection'
import HeroDashboard from '@/components/HeroDashboard'
import HeroSection from '@/components/HeroSection'
import MovementsSections from '@/components/MovementsSections'
import OptimizeSection from '@/components/OptimizeSection'
import QualitySection from '@/components/QualitySection'
import React from 'react'

function Home() {
  return (
    <div>
        <HeroSection/>
        <HeroDashboard/>
        <FlawlessSection/>
        <QualitySection/>
        <OptimizeSection/>
        <MovementsSections/>
    </div>
  )
}

export default Home