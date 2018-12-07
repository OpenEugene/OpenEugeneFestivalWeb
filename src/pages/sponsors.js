import React, { Component } from 'react'
import Layout from '../components/layout'
import sponsors from '../json/sponsors'
import SponsorCard from '../components/SponsorCard'

class Sponsors extends Component {
  render() {
    const sponsorCards = sponsors.map((sponsor, i) => {
      return <SponsorCard key={i} {...sponsor} />
    })

    return (
      <Layout>
        <h2 style={{ textAlign: 'center' }}>Open Eugene Sponsors</h2>
        <h3>
          <a href="https://eugtech.github.io/Open-Eugene/open-eugene-fest-sponsorship.pdf">
          </a>
        </h3>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Title Sponsor</h3>
          {sponsorCards.filter(card => card.props.Level === 'Title')}
        {/* {sponsorCards.filter(card => card.props.Level === 'Title')} */}
        <hr />
        <h3 style={{ textAlign: 'center' }}>Presenting Sponsors</h3>
        <div className="sponsorContainer" >
          {sponsorCards.filter(card => card.props.Level === 'Presenting')}
        </div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Supporting Sponsors</h3>
        <div className="sponsorContainer" style={{alignItems: "center"}}>
          {sponsorCards.filter(card => card.props.Level === 'Supporting')}
        </div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Community Sponsors</h3>
        <div className="sponsorContainer">
          {sponsorCards.filter(card => card.props.Level === 'Community')}
        </div>
      </Layout>
    )
  }
}
export default Sponsors
