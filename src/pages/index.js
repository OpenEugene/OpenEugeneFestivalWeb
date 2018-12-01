import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import allTheThingsLogo from '../images/open-all-the-things.jpg'

const IndexPage = () => (
  <Layout>
    <h2 style={{ textAlign: 'center' }}>What is Open Eugene Festival?</h2>
    <p style={{ textAlign: 'center' }}>
      Welcome to the Open Eugene Festival web page!{' '}
      <span role="img" aria-label="party emojis">
        🎉
      </span>{' '}
      We’re glad you’re here!
    </p>
    {/* textAlign-ed div added to center youTube iframe
        Media query in Layout.css changes width to 100% at 560px so it will be responsive on mobile */}
    <div style={{ textAlign: 'center' }}>
      <iframe
        title="5-min Open Eugene Explaination c/ Mark Davis"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/PZojOfxjPPg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <p>
      The Open Eugene Festival is the first (that we know of) intentional
      gathering of open enthusiasts in the Eugene Oregon region. Our theme is
      “Open all the Things!”
    </p>
    <h4> Signup as a Contributor, Volunteer, or Buy a Ticket on &nbsp; 
      <a
        href="https://www.eventbrite.com/e/open-eugene-festival-tickets-52110392587"
        target="_blank"
        rel="noopener noreferrer"
      >
       Eventbrite 
      </a>
      &nbsp; or &nbsp; 
      <a
        href="https://www.facebook.com/events/196679251226823/"
        target="_blank"
        rel="noopener noreferrer"
      > 
      Facebook
      </a>
    </h4>
    <img
      style={{ float: 'right', width: '350px' }}
      className="allTheThingsLogo"
      src={allTheThingsLogo}
      alt="OPEN ALL THE THINGS"
    />

    <h3>What kind of things are we talking about?</h3>
    <ul>
      <li>Open source software</li>
      <li>Open hardware</li>
      <li>Open data</li>
      <li>Working Open on any project</li>
    </ul>

    <h4>What does “open” mean?</h4>

    <ul>
      <li>Easy to understand,</li>
      <li>Easy to share, remix and build on, and</li>
      <li>Welcoming to all participants, from any background.</li>
    </ul>
    <h4> Who should come to Open Eugene Fest?</h4>

    <ul>
      <li>Folks who are open curious and want to learn.</li>
      <li>Folks with a project idea to share with the world</li>
      <li>
        Folks currently running open projects and would like to get more
        collaborators
      </li>
      <li>
        Folks who know all-the-thing about working open and want to share
        knowledge.
      </li>
    </ul>

    <h3>
      Join the conversation on the #open-eugene channel of the <br />
      <a href="http://eugslack.com" target="_blank" rel="noopener noreferrer">
        EugeneTech Slack http://eugslack.com
      </a>
    </h3>
    <hr />

    <h3>When and Where</h3>
    {/* made responsive in layout.css */}
    <div style={{ display: 'flex' }} className="mapContainer">
      <p>
        Open Eugene Fest will be happening Friday-Saturday December 14th & 15th
        2018 at{' '}
        <a
          href="https://www.trifoia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trifoia
        </a>
        .
      </p>
      <iframe
        title="Trifoia map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7874124852015!2d-123.09462638451642!3d44.04644667910977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e151476cab1%3A0x21f72062e230b3cd!2sTrifoia!5e0!3m2!1sen!2sus!4v1542760773176"
        width="300"
        height="200"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
    <hr />

    <h3>Why Come to Open Fest?</h3>
    <ul>
      <li>To Play KING-PONG!</li>
      <li>To Find my Open Source brothers and sisters in the region</li>
      <li>Get your hands dirty! Hack with techies, Talk with Talkies?</li>
      <li>Show the world your awesome project!</li>
      <li>
        Story time with Dr. Bud!{' '}
        <a
          href="https://smartdown.site/#gallery/Home.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          SmartDown Edition
        </a>
      </li>
    </ul>
    <h4>
      <Link to="/projects">
        Check out what projects are coming or even... Submit your own!
      </Link>
    </h4>
    <hr />

   
    <h4>
      <a href="https://github.com/EugTech/Open-Eugene/blob/master/CODE_OF_CONDUCT.md">
        View Code of Conduct
      </a>
    </h4>
  </Layout>
)

export default IndexPage
