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
  return (
    <div className='mt-2'>
      <FacebookShareButton>
        <FacebookIcon size={45} round={true} />
      </FacebookShareButton>
      <TwitterShareButton>
        <TwitterIcon size={45} round={true} />
      </TwitterShareButton>
      <PinterestShareButton media={props.media}>
        <PinterestIcon size={45} round={true} />
      </PinterestShareButton>
      <FacebookMessengerShareButton>
        <FacebookMessengerIcon size={45} round={true} />
      </FacebookMessengerShareButton>
      <RedditShareButton>
        <RedditIcon size={45} round={true} />
      </RedditShareButton>
      <LinkedinShareButton>
        <LinkedinIcon size={45} round={true} />
      </LinkedinShareButton>
    </div>
  )
}

export default ShareButtons
