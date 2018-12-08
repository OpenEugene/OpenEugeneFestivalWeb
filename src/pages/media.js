import React, { Component } from 'react';
import Layout from '../components/layout';

const mediaSheet = 'https://script.googleusercontent.com/macros/echo?user_content_key=93-ltdAnPMem2Q32hAc8nX6jANdP3QgZ3EOOzQrD8RGZnO5hYtrVr5TGf6JfV9TGD1bW7yVLiO5nsT9aMQMsCzYiqjPUFsYzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAqgXoWBTgCVBnNERKTjEvDsGfBsZoiU7LHd4mCAnYyko_pPCyXCr_yuiPLIegSwjw&lib=MwltHTXjXpuiGDLxc5pNpa7W3JIQpNf-7'

class Media extends Component {
  state = {
    articles: [],
    videos: [],
    audio: [],
  }

  async componentDidMount() {
    const mediaData = await fetch(mediaSheet).then(result => result.json()).then(data => {
      return (
        this.setState({
          articles: data.filter(item => item.type === "article"),
          videos: data.filter(item => item.type === "video"),
          audio: data.filter(item => item.type === "audio"),
        })
      )
    });
    console.log(mediaData);
  }
  render() {
    return (
      <Layout>
        <h2>Check out some media surrounding Open Eugene!</h2>
        <hr />
        <h3>Articles</h3>
        {this.state.articles}
        <hr />
        <h3>Videos</h3>
        {this.state.videos}
        <hr />
        <h3>Audio</h3>
        {this.state.audio}
        <hr />
      </Layout>
    )
  }

}

export default Media;