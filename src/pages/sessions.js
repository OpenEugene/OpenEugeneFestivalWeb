import React, { Component } from 'react'
import Layout from '../components/layout'
import programs from '../json/programming'
import ProgrammingCard from '../components/programmingCard'

class Sessions extends Component {

  render() {
    const programmingCards = programs.map((program, i) => {
      return <ProgrammingCard key={i} {...program} />
    })
    return (
      <Layout>
        <h3>Present a Session!</h3>
        <p>
          Do you have a case study to talk about, or plans to provide open-data?
          Can teach a class on using Github pages, or lead a workshop on
          inclusiveness. These are all examples of programming we’d love to make
          part of the event.
        </p>
        <h3 style={{ textAlign: 'center' }}>
          Fill in the{' '}
          <a
            href="https://goo.gl/forms/tg0Il8VadaCCdMSJ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            programming form here
          </a>
        </h3>
        <h2>Presentations to look forward to!</h2>
        {programmingCards}
        <hr />

  
      </Layout>
    )
  }
}

export default Sessions