import React from 'react'
import waves from './assets/waves.webm'
import './App.css'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SlSocialGithub } from 'react-icons/sl'
import scroll from './assets/scroll.png'
import Spline from '@splinetool/react-spline';


const App = () => {
  return (
    <main className='portfolio'>
      <section className='home'>
        <div className='videoBg'>
          <video className='videoTag' autoPlay loop muted>
            <source src={waves} type='video/mp4' />
          </video>
        </div>

        <nav> O//B </nav>
        <div className='hero'>
          <h2>Hey,</h2>
          <h1>I'm Ohshin Bhat</h1>
          
          <div className='tagline'><h2>Web Developer and Designer,</h2><h3>from Bengaluru, India</h3></div>
          <div className='links'>
            <a href='https://www.instagram.com/ohshiin/' className='icons' target="_blank"><SlSocialInstagram size={36} /></a>
            <a href='https://twitter.com/ohshinbhat' className='icons' target="_blank"><SlSocialTwitter size={36} /></a>
            <a href='https://www.linkedin.com/in/ohshinbhat' className='icons' target="_blank"><SlSocialLinkedin size={36} /></a>
            <a href='https://github.com/ohshinbhat' className='icons' target="_blank"><SlSocialGithub size={36} /></a>

          </div>



        </div>



      </section>
      <section className='about'>
        <div className='head1'>Code. Create.</div>
        <div className='head2'>Coffee.</div>
        <div className='abt'>
          <div className='abt-right'>
            <div>My GearBox includes <a target="_blank" href='https://react.dev/'>React.js,/</a> <a target="_blank" href='https://nextjs.org/'>Next.js,</a> <a target="_blank" href='https://tailwindcss.com/'>TailwindCss,</a> <a target="_blank" href='https://ui.shadcn.com'>Shadcn,</a> <a target="_blank" href='https://mui.com'>MUI,</a> <a target="_blank" href='https://www.framer.com/motion/'>Framer,</a> <a target="_blank" href='https://www.figma.com'>Figma,</a> <a target="_blank" href='https://spline.design'>Spline,</a> <a target="_blank" href='https://redux.js.org' >Redux</a> and much more</div>
            <div>I have 1yr+ with creative development and 3yrs+ of programming experience</div>
            <div>From creative and responsive designs to seamless user experiences,</div>
            <div><button className='contact'>Contact me</button> to start building.</div>
          </div>
          <div className='abt-left'>
            <Spline scene="https://prod.spline.design/bZqhAG6uf9ENskh3/scene.splinecode" className='laptop' />


          </div>
        </div>

      </section>

    </main>
  )
}

export default App