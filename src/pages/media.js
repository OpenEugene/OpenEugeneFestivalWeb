import React, { Component } from 'react'
import Layout from '../components/layout'
import mediaJSON from '../json/media'
import ArticleCard from '../components/articleCard'
import VideoCard from '../components/videoCard'
import AudioCard from '../components/audioCard'

class Media extends Component {
  render() {
    const articleCards = mediaJSON
      .filter(item => item.type === 'article')
      .map((item, i) => <ArticleCard key={i} {...item} />)

    const videoCards = mediaJSON
      .filter(item => item.type === 'video')
      .map((item, i) => <VideoCard key={i} {...item} />)

    const audioCards = mediaJSON
      .filter(item => item.type === 'audio')
      .map((item, i) => <AudioCard key={i} {...item} />)

    return (
      <Layout>
        <h2>Check out some media surrounding Open Eugene!</h2>
        <hr />
        <h3>Articles</h3>
        {articleCards}
        <hr />
        <h3>Videos</h3>
        {videoCards}
        <hr />
        <h3>Audio</h3>
        {audioCards}
        <hr />
      </Layout>
    )
  }
}

export default Media
