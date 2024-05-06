import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAzMTY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Explore some of the services offered by our skilled technicians.',
  image1Src:
    'https://images.unsplash.com/photo-1590075633056-de7a19338adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAzMTY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Carpentry Service',
  image2Alt: 'Car Maintenance Service',
  image2Src:
    'https://images.unsplash.com/photo-1600745668035-fc2a1af11454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAzMTY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Our Services Gallery',
  image1Alt: 'Plumbing Service',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery1
