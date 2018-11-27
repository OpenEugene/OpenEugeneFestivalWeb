import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div
    style={{
      background: 'linear-gradient(to right, #00ff6d, #00faff)',
      margin: '0',
    }}
  >
    <div
      className="socialMediaIcons"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <a
        href="https://github.com/EugTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/EugTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.facebook.com/EugTech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.instagram.com/eugtech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <img
        src="https://siliconshire.org/static/images/stamp_made_white.png"
        alt="Made in the shire logo"
        style={{ margin: 0 }}
      />
    </div>
    <div style={{textAlign: 'center', paddingBottom: '1rem', background: '#68676788'}}>
      <a style={{color: 'white'}}
        href="https://www.facebook.com/events/196679251226823/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out the facebook event!
      </a>
    </div>
  </div>
)

export default Footer
