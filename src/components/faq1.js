import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Answer:
    'If you are not satisfied with the service provided, please contact our customer support team, and we will ensure to address your concerns promptly.',
  faq5Question: 'Is there a warranty for the services provided by Al-Usta?',
  action1: 'Contact',
  faq1Question: 'What types of services does Al-Usta offer?',
  faq4Question: 'What if I am not satisfied with the service provided?',
  faq3Answer:
    'Yes, all maintenance technicians on Al-Usta are highly qualified and experienced professionals to ensure top-notch service for our customers.',
  faq3Question: 'Are the maintenance technicians qualified and experienced?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading2: 'Still have a question?',
  heading1: 'FAQs',
  faq5Answer:
    'Yes, Al-Usta provides a warranty for the services rendered to ensure customer satisfaction and peace of mind.',
  faq1Answer:
    'Al-Usta offers a variety of electronic repair services including plumbing, car maintenance, carpentry, furniture upholstery, and more.',
  faq2Answer:
    'You can easily book a maintenance technician through our website by selecting the service you need, providing your location, and choosing a convenient time slot.',
  faq2Question: 'How can I book a maintenance technician through Al-Usta?',
}

FAQ1.propTypes = {
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  action1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq2Question: PropTypes.string,
}

export default FAQ1
