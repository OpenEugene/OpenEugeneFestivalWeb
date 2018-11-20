import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import projects from '../json/projects'
import ProjectCard from '../components/projectCard'

class ProjectsPage extends Component {
  render() {
    const projectCards = projects.map((project, i) => {
      return <ProjectCard {...project} />
    })
    return (
      <Layout>
        <h1>Eugene Open Source Projects</h1>
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
        <hr></hr>
        {projectCards}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
export default ProjectsPage
