import React from 'react'

const ProjectTable = () => (
  <table>
    <tr>
      <th>Current State of your project</th>
      <th>Possible state after the event</th>
    </tr>
    <tr>
      <td>I have a great idea!</td>
      <td>
        You have launched a project online with all the things folks need to
        collaborate with you!
      </td>
    </tr>
    <tr>
      <td>I have an open project on github but nobody is contributing.</td>
      <td>
        Now your project is welcoming and inviting to folks and you have issues
        for folks to work on.
      </td>
    </tr>
    <tr>
      <td>
        I have a project I’d like to share, but I’d like to keep my branding
        private for reasons.
      </td>
      <td>
        Now the guts of your project is open, but your branding is protected by
        a licenses that preserves control over your brand.
      </td>
    </tr>
    <tr>
      <td>
        I made a giant pong controller and now folks in Chattanooga want one,
        but I don’t want to build it or ship it to them
      </td>
      <td>
        You've publish the plan on Instructables, add a creative commons license
        and they can build it themselves!
      </td>
    </tr>
  </table>
)

export default ProjectTable
