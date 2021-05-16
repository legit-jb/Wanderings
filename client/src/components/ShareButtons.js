import React from 'react'
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  FacebookMessengerIcon,
  PinterestIcon
} from 'react-share'

const ShareButtons = props => {
  const url = 'https://wanderings-project.herokuapp.com'
  const desc = 'I just posted a new marker and image on Wanderings!'

  return (
    <div className='m-2'>
      <FacebookShareButton url={url} quote={desc}>
        <FacebookIcon size={45} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={desc}>
        <TwitterIcon size={45} round={true} />
      </TwitterShareButton>
      <PinterestShareButton url={url} media={props.media} description={desc}>
        <PinterestIcon size={45} round={true} />
      </PinterestShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon size={45} round={true} />
      </FacebookMessengerShareButton>
      <RedditShareButton url={url} title={desc}>
        <RedditIcon size={45} round={true} />
      </RedditShareButton>
      <LinkedinShareButton url={url} summary={desc}>
        <LinkedinIcon size={45} round={true} />
      </LinkedinShareButton>
    </div>
  )
}

export default ShareButtons
