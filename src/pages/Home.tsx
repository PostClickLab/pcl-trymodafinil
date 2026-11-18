import { FAQ } from '../sections/home/FAQ'
import { FinalCTA } from '../sections/home/FinalCTA'
import { Hero } from '../sections/home/Hero'
import { HowItWorks } from '../sections/home/HowItWorks'
import { Reviews } from '../sections/home/Reviews'
import { Science } from '../sections/home/Science'
import { Treatments } from '../sections/home/Treatments'
import { WhatIs } from '../sections/home/WhatIs'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIs />
      <Treatments />
      <Science />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  )
}
