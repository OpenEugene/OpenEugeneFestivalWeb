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
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <p>
      You’ll see Mozilla’s ethos of “open” in action at the festival – it’s
      about making concepts and projects
    </p>
      <ol>
        <li>Easy to understand,</li>
        <li>Easy to share, remix and build on, and</li>
        <li>Welcoming to all participants, from any background.</li>
      </ol>
      <blockquote style={{background: '#00faff'}}>Open Eugene Festival is a great space to experience and experiment with
      this approach<br />—we call it “working open”</blockquote>
    <p>
      The Festival is part hack-a-thon, part conference, part art exhibition. We
      are working with learners & leaders to help citizens of Eugene open
      projects, improve collaboration, and inspire the community.
    </p>
    <hr /> 
    
    <h3>When and Where</h3>
    {/* made responsive in layout.css */}
    <div style={{display: 'flex'}} className="mapContainer">
      <p>Open Eugene Fest will be happening Friday-Saturday December 14th & 15th 2018 at <a href="https://www.trifoia.com" target="_blank" rel="noopener noreferrer">Trifoia</a>.</p>
      <iframe title="Trifoia map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7874124852015!2d-123.09462638451642!3d44.04644667910977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e151476cab1%3A0x21f72062e230b3cd!2sTrifoia!5e0!3m2!1sen!2sus!4v1542760773176" width="300" height="200" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
    </div>
    <hr />
    
    <h3>Why Come to Open Fest?</h3>
    <ul>
      <li>To Play KING-PONG!</li>
      <li>To Find my Open Source brothers and sisters in the region</li>
      <li>Get your hands dirty! Hack with techies, Talk with Talkies?</li>
      <li>Show the world your awesome project!</li>
      <li>Story time with Dr. Bud! <a href="https://smartdown.site/#gallery/Home.md" target="_blank" rel="noopener noreferrer">SmartDown Edition</a></li>
    </ul>
    <h4><Link to="/projects">Check out what projects are coming or even... Submit your own!</Link></h4>
    <hr />

    <h3><a href="https://www.eventbrite.com/e/open-eugene-festival-tickets-52110392587" target="_blank" rel="noopener noreferrer">Signup as a Contributor, Volunteer, or Buy a Ticket on eventbrite</a></h3>
  </Layout>
)

export default IndexPage
