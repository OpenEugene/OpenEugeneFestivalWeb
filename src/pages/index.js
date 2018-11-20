import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2 style={{ textAlign: 'center' }}>What is Open Eugene Festival?</h2>

    {/* textAlign-ed div added to center youTube iframe
        Media query in Layout.css changes width to 100% at 560px so it will be responsive on mobile */}
    <div style={{ textAlign: 'center' }}>
      <iframe
        title="5-min Open Eugene Explaination c/ Mark Davis"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/8VDYcNPw9zA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <p>
      You’ll see Mozilla’s ethos of “open” in action at the festival – it’s
      about making concepts and projects
      <ul>
        <li>1) easy to understand,</li>
        <li>2) easy to share, remix and build on, and</li>
        <li>3) welcoming to all participants, from any background.</li>
      </ul>
      <blockquote style={{background: '#aaa'}}>Open Eugene Festival is a great space to experience and experiment with
      this approach<br />—we call it “working open”</blockquote>
    </p>
    <p>
      The Festival is part hack-a-thon, part conference, part art exhibition. We
      are working with learners & leaders to help citizens of Eugene open
      projects, improve collaboration, and inspire the community.
    </p>
    <hr /> 
    <h3>Why Come to Open Fest?</h3>
    <ul>
      <li>To Play KING-PONG!</li>
      <li>To Find my Open Source brothers and sisters in the region</li>
      <li>Get your hands dirty! Hack with techies, Talk with Talkies?</li>
      <li>Show the world your awesome project!</li>
      <li>Story time with Dr. Bud! <a href="https://smartdown.site/#gallery/Home.md" target="_blank" rel="noopener noreferrer">SmartDown Edition</a></li>
    </ul>
    <h4><Link to="/projects">Click here to Sign up or check out the projects already coming!</Link></h4>
  </Layout>
)

export default IndexPage
