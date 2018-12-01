import React, { Component } from 'react'
import Layout from '../components/layout'
import projects from '../json/projects'
import ProjectCard from '../components/projectCard'
import ProjectTable from '../components/projectTable'

class ProjectsPage extends Component {
  render() {
    const projectCards = projects.map((project, i) => {
      return <ProjectCard key={i} {...project} />
    })
    return (
      <Layout>
        <h2>Eugene Open Source Projects</h2>
        <hr />
        <h3>Bring you Project, We'll help you open it!</h3>
        <p>
          Bring your project and we'll help you open it! No matter the current
          state of your project, we can make it more open.{' '}
        </p>
        <p>
          What does “open” mean?
          <ol>
            <li>Easy to understand,</li>
            <li>Easy to share, remix and build on, and,</li>
            <li>Welcoming to all participants, from any background.</li>
          </ol>
        </p>
        <p>
          This applies to software projects, hardware projects, art projects,
          events and anything that you would like to work on with others locally
          and online. Here’s some examples
        </p>
        <ProjectTable />

        <h4 style={{textAlign: 'center'}}>
          No matter the state of your projects, we’d love to have you bring it
          to the event and we’ll move it along in the process of making it open
          source.</h4>
          <p> We are looking for projects that collaborators can work on
          during the event. Maybe you have a project that is up and running but
          not open-sourced. We can help take you to the next level. Perhaps you
          have an idea for a project and would like to start it out by working
          in the open. We can get you started. Or maybe you have some data stuck
          in a flat file somewhere you’d like to see made available to the world
          or have a API built. That works too! We’d love to build community
          connections between projects and contributors.
        </p>

        <h3 style={{ textAlign: 'center' }}>
          Fill in the{' '}
          <a
            href="https://goo.gl/forms/xQsoEPznuxRDdhNz2"
            target="_blank"
            rel="noopener noreferrer"
          >
            project form here
          </a>
        </h3>
        <hr />

        <h2>Projects already on their way!</h2>
        {projectCards}
      </Layout>
    )
  }
}
export default ProjectsPage
