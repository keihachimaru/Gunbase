import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/home.css'

import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import News from '../components/layout/News'
import Latest from '../components/layout/Latest'
import About from '../components/layout/About'

import zetaImg from '@/assets/gundams/1 ZETA GUNDAM.png';
import unicornImg from '@/assets/gundams/2 UNICORN GUNDAM.png';
import sinanjuImg from '@/assets/gundams/3 SINANJU.png';
import kamikiImg from '@/assets/gundams/4 KAMIKI.png';
import akatsukiImg from '@/assets/gundams/5 AKATSUKI.png';
import redImg from '@/assets/gundams/6 RED FRAME.png';
import aerialImg from '@/assets/gundams/7 AERIAL REBUILD.png';

function Home() {
  const heroItems = [
    { id: 1, title: 'Zeta Gundam', image: zetaImg },
    { id: 2, title: 'Unicorn', image: unicornImg },
    { id: 3, title: 'Sinanju', image: sinanjuImg },
    { id: 4, title: 'Kamiki', image: kamikiImg },
    { id: 5, title: 'Akatsuki', image: akatsukiImg },
    { id: 6, title: 'Red Frame', image: redImg },
    { id: 7, title: 'Aerial Rebuild', image: aerialImg },
  ];

  const news = [
    { id: 1, title: 'New model', content: 'New model just dropped', link: 'https//:wikipedia.org'}
  ]

  const latest = [
    { id: 1, title: 'New model', content: 'New model just dropped'}
  ]

  return (
    <div id="home">
        <Navbar/>
        <Hero items={heroItems}/>
        <News news={news}/>
        <Latest latest={latest}/>
        <About/>
    </div>
  )
}

export default Home;
