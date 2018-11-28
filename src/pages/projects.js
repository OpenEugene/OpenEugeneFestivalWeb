import React, { Component } from 'react'
import Layout from '../components/layout'
import projects from '../json/projects'
import ProjectCard from '../components/projectCard'
import ProjectTable from '../components/projectTable';

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
          state of your project, we can make it more open. What does “open”
          mean?
          <ol>
            <li>Easy to understand,</li>
            <li>Easy to share, remix and build on, and,</li>
            <li>Welcoming to all participants, from any background.</li>
          </ol>
          This applies to software projects, hardware projects, art projects,
          events and anything that you would like to work on with others locally
          and online. Here’s some examples
        </p>
        <ProjectTable />

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

        <h4>
          <a href="https://github.com/EugTech/Open-Eugene/blob/master/CODE_OF_CONDUCT.md">
            View Code of Conduct
          </a>
        </h4>
        <hr />

        <h2>Projects already on their way!</h2>
        {projectCards}
      </Layout>
    )
  }
}
export default ProjectsPage
