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
    const url='https://wanderings-project.herokuapp.com/upload'

  return (
    <div className='m-2'>
      <FacebookShareButton url={url}>
        <FacebookIcon size={45} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={45} round={true} />
      </TwitterShareButton>
      <PinterestShareButton url={url} media={props.media}>
        <PinterestIcon size={45} round={true} />
      </PinterestShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon size={45} round={true} />
      </FacebookMessengerShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={45} round={true} />
      </RedditShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={45} round={true} />
      </LinkedinShareButton>
    </div>
  )
}

export default ShareButtons
