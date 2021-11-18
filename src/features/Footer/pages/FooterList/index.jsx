import React from 'react'
import facebook from '../../../../assets/icons/facebook.png'
import twitter from '../../../../assets/icons/twitter.png'
import linked_in from '../../../../assets/icons/linkedin.png'
import icon_right from '../../../../assets/icons/icon_right.png'
import './styles.scss'

FooterList.propTypes = {}

function FooterList() {
  return (
    <div className="footer__list">
      <div className="footer__item">
        <h3 className="footer__title">Product</h3>
        <ul>
          <li>
            <a href="#">Listing</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Property</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Agents</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Blog</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Resources</h3>
        <ul>
          <li>
            <a href="#">Our Homes</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Member Stories</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Video</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Free trial</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Company</h3>
        <ul>
          <li>
            <a href="#">Patnerships</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Terms of use</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Privacy</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
          <li>
            <a href="#">Sitemap</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Get in touch</h3>
        <p>You’ll find your next home, in any style you prefer.</p>
        <div className="footer__icon-list">
          <a href="https://www.facebook.com/" className="icon__item">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitter.com/" className="icon__item">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/" className="icon__item">
            <img src={linked_in} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterList
