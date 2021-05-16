import React from 'react'
import { Helmet } from 'react-helmet'

function MetaTags (props) {
  return (
    <Helmet>
      <meta property='og:title' content='Wanderings' />
      <meta
        property='og:url'
        content='http://wanderings-project.herokuapp.com'
      />
      <meta
        property='og:description'
        content='I just posted a new marker and image on Wanderings!'
      />
      <meta property='og:image' content={props.img} />
      <meta property='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default MetaTags
