import React from 'react'
import Header from './forhome/header/Header'
import Section1 from './forhome/section1/Section1'
import Section2 from './forhome/section2/Section2'
import Section3 from './forhome/section3/Section3'
import Section4 from './forhome/section4/Section4'
import Section5 from './forhome/section5/Section5'
import Footer from './forhome/footer/Footer'





import './Home.scss'
import { NavLink } from 'react-router-dom'
import { eatly, korzinka } from '../assets'
import Navbar from './navbar/Navbar'
const Home = ({number,setnumber}) => {
  return (
    <div className='home'>
        <Navbar number={number}setnumber={setnumber}/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Home
