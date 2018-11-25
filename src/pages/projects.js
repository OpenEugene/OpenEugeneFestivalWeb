import React, { Component } from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'

import projects from '../json/projects'
import ProjectCard from '../components/projectCard'
// regEx to clean emails: "Email Address":.+

import programs from '../json/programming';
import ProgrammingCard from '../components/programmingCard'
class ProjectsPage extends Component {
  render() {
    const projectCards = projects.map((project, i) => {
      return <ProjectCard key={i} {...project} />
    })
    const programmingCards = programs.map((program, i) => {
      return <ProgrammingCard key={i} {...program} />
    })
    return (
      <Layout>
        <h2>Eugene Open Source Projects</h2>
        <hr />
        <h3>Submit a project</h3>
        <p>
          We are looking for projects that collaborators can work on during the
          event. Maybe you have a project that is up and running but not
          open-sourced. We can help take you to the next level. Perhaps you have
          an idea for a project and would like to start it out by working in the
          open. We can get you started. Or maybe you have some data stuck in a
          flat file somewhere you’d like to see made available to the world or
          have a PI built. That works too! We’d love to build community
          connections between projects and contributors.
        </p>
        <h3 style={{textAlign: "center"}}>
          Fill in the <a href="https://goo.gl/forms/xQsoEPznuxRDdhNz2" target="_blank" rel="noopener noreferrer">project form here</a>
        </h3>
        <h3>Submit programming</h3>
        <p>Do you have a case study to talk about, or plans to provide open-data? Can teach a class on using Github pages, or lead a workshop on inclusiveness. These are all examples of programming we’d love to make part of the event.</p>
        <h3 style={{textAlign: "center"}}>
          Fill in the <a href="https://goo.gl/forms/tg0Il8VadaCCdMSJ2" target="_blank" rel="noopener noreferrer">programming form here</a>
        </h3>
        <h4><a href="https://github.com/EugTech/Open-Eugene/blob/master/CODE_OF_CONDUCT.md">View Code of Conduct</a></h4>
        <hr />
        
        <h2>Presentations to look forward to!</h2>
        {programmingCards}
        <hr />

        <h2>Projects already on their way!</h2>
        {projectCards}
      </Layout>
    )
  }
}
export default ProjectsPage
