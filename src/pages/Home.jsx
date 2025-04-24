// The Landing page where user will land first.
import React from 'react'
// Components
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Why from '../components/Why'
import Need from '../components/Need'
import News from '../components/News'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Hero/>
        <Why/>
        <Feature/>
        <News/>
        <Need/>
        <Footer/>
    </div>
  )
}
