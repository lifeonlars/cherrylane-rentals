import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <p>
            Based 30 minutes outside Oslo, Norway, Cherry Lane first opened our
            doors in 2019 with the vision to come up with a cost efficient and
            sustainable solution for people in need of beautiful garments for
            only a short time frame. It just seemed crazy to buy a dress that
            can only be worn once and is absolutely not environmentally friendly
            either!
          </p>
          <p>
            We are happy to service ALL of Norway with longer rental periods but
            can also offer discounts with our chosen Photography Studio vendors.
            In supporting these local businesses we really work towards reducing
            our carbon footprint meaning garments can be available upon the day
            of use with no retrieval, returning or cleaning required. 
          </p>
          {close}
        </article>

        <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gallery</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Coming soon!</h3>
          <p>
            Product photographs are in progress for all our dresses and will be
            added soon. You're welcome to request a PDF catalogue or arrange a
            time to view the dresses in person.
          </p>
          {close}
        </article>

        <article
          id="rates"
          className={`${this.props.article === 'rates' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rental Rates</h2>
          <p>
            Items can be tried on and picked up at a pre-agreed time from Cherry
            Lange then returned by the same time following the rental period
            chosen (e.g. within a 24 hour period, 5 days or 2 weeks).
            Alternatively service can be booked with our preferred photographers
            to be available from the studio on your photo day to save on your
            travel costs to and from Cherry Lane.
          </p>

          <h3>24 Hour Hire</h3>
          <h5>kr 500</h5>
          <hr />
          <h3>5 Day Hire</h3>
          <h5>kr 650</h5>
          <hr />
          <h3>2 Week Hire</h3>
          <h5>kr 1000</h5>
          <hr />
          <p>
            Bond is the RRP which is simply refunded less rental fees etc when
            garment is returned, easy! PLUS Cleaning is included in rental fee.
          </p>

          <p>Contact us to Book pickup time</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <p>
            Contact us via phone (46675248) or email at{' '}
            <a href="mailto:cherrylanenorge@gmail.com">
              cherrylanenorge@gmail.com
            </a>{' '}
            to arrange a time to view, try on or pick-up a dress.{' '}
          </p>

          <p>We are located in Kløfta, Ullensaker in Norway.</p>

          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            */}
            <li>
              <a
                href="https://www.facebook.com/CherryLaneNorge/"
                className="icon fa-facebook"
                target="_blank"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cherrylanerentals/"
                className="icon fa-instagram"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:cherrylanenorge@gmail.com"
                className="icon fa-envelope"
                target="_blank"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
