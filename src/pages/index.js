import React from 'react'
//mport { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 style={{textAlign: 'center'}}>What is Open Eugene Festival?</h1>

    {/* textAlign-ed div added to center youTube iframe
        Width changed from 560 to 90% so it will be responsive on mobile */}
    <div style={{textAlign: 'center'}}><iframe title="5-min Open Eugene Explaination c/ Mark Davis" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8VDYcNPw9zA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    
    <p>You’ll see Mozilla’s ethos of “open” in action at the festival – it’s about making concepts and projects 1) easy to understand, 2) easy to share, remix and build on, and 3) welcoming to all participants, from any background. Open Eugene Festival is a great space to experience and experiment with this approach—we call it “working open”</p>
    <p>The Festival is part hack-a-thon, part conference, part art exhibition. We are working with learners & leaders to help citizens of Eugene open projects, improve collaboration, and inspire the community.</p>
  </Layout>
)

export default IndexPage
