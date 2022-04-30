import React from 'react'
import Hero from '../../components/home/Hero/Hero'
import Section1 from '../../components/home/Section1/Section1'
import Section2 from '../../components/home/Section2/Section2'
import Section3 from '../../components/home/Section3/Section3'
import Section4 from '../../components/home/Section4/Section4'
import Section5 from '../../components/home/Section5/Section5'

const Home = () => {
   return (
      <div className='home'>
         <Hero />
         <Section1 />
         <Section2 />
         <Section3 />
         <Section4 />
         <Section5 />
      </div>
   )
}

export default Home