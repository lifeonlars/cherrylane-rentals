import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/cherry-lane.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={Logo} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Beautiful Maternity Rentals</h1>
        <p>
          ​Cherry Lane offers stunning and sustainable photographic rental
          services in a simple and affordable way.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('gallery')
            }}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('rates')
            }}
          >
            Rates
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
