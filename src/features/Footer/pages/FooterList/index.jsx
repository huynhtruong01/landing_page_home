import { motion } from 'framer-motion'
import React from 'react'
import { linkItem } from '../../../../animation/Animation'
import facebook from '../../../../assets/icons/facebook.png'
import icon_right from '../../../../assets/icons/icon_right.png'
import linked_in from '../../../../assets/icons/linkedin.png'
import twitter from '../../../../assets/icons/twitter.png'
import useScroll from '../../../../hook/useScroll'
import './styles.scss'

FooterList.propTypes = {}

function FooterList() {
  const [element, controls] = useScroll()
  return (
    <div className="footer__list" ref={element}>
      <div className="footer__item">
        <h3 className="footer__title">Product</h3>
        <ul>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 }}
          >
            <a href="#">Listing</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 2 }}
          >
            <a href="#">Property</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 3 }}
          >
            <a href="#">Agents</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 4 }}
          >
            <a href="#">Blog</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Resources</h3>
        <ul>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 5 }}
          >
            <a href="#">Our Homes</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 6 }}
          >
            <a href="#">Member Stories</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 7 }}
          >
            <a href="#">Video</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 8 }}
          >
            <a href="#">Free trial</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Company</h3>
        <ul>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 9 }}
          >
            <a href="#">Patnerships</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 10 }}
          >
            <a href="#">Terms of use</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 11 }}
          >
            <a href="#">Privacy</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
          <motion.li
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 12 }}
          >
            <a href="#">Sitemap</a>
            <span>
              <img src={icon_right} alt="" />
            </span>
          </motion.li>
        </ul>
      </div>
      <div className="footer__item">
        <h3 className="footer__title">Get in touch</h3>
        <motion.p
          variants={linkItem}
          animate={controls}
          transition={{ delay: 0.125 * 13 }}
        >
          You’ll find your next home, in any style you prefer.
        </motion.p>
        <div className="footer__icon-list">
          <motion.a
            href="https://www.facebook.com/"
            className="icon__item"
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 14 }}
          >
            <img src={facebook} alt="" />
          </motion.a>
          <motion.a
            href="https://twitter.com/"
            className="icon__item"
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 15 }}
          >
            <img src={twitter} alt="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/"
            className="icon__item"
            variants={linkItem}
            animate={controls}
            transition={{ delay: 0.125 * 16 }}
          >
            <img src={linked_in} alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default FooterList
