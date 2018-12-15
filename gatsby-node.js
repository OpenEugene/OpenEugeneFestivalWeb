/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const fetchOEFTest = () =>
    axios.get(
      'https://script.google.com/macros/s/AKfycbw-Uol2eP0mkN5bA7jm25MzAu427KUF19tiH03H5fWJiBE1nMeZ/exec'
    )
  const res = await fetchOEFTest()
console.log(res.data);
  // map results to create nodes
  res.data.map((item, i) => {
    // Create your node object
    const itemNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: 'OEFTest', // name of graphQL query --> allOEFTest {} ?
      },
      children: [],
      stuff: item,
    }
    // get content digest of node (required field)
    const contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(itemNode))
      .digest('hex')
    // add it to the userNode
    itemNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(itemNode)
  })
  return
}
