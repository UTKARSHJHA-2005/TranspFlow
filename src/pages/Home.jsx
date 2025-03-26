import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Why from '../components/Why'
import Need from '../components/Need'
import News from '../components/News'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Why/>
        <Feature/>
        <News/>
        <Need/>
        <Footer/>
    </div>
  )
}
