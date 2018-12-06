import React, { Component } from 'react'
import Layout from '../components/layout'

import schedule from '../json/schedule'
import ScheduleCard from '../components/scheduleCard'

class Schedule extends Component {
  render() {
    return (
      <Layout>
        <ScheduleCard {...schedule} />
      </Layout>
    )
  }
}

export default Schedule