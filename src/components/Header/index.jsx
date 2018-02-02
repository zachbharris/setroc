import React, { Component } from 'react';
import { Link } from 'react-router';

import Today from '../Pages/Home/Data/Today';
import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div>
        <div id="Header" className="flex-l justify-between items-center tl-l tc w-100 ph0 pv0-l pv2 system bg-black-blue">
          <div className="blur flex items-center justify-center mv0-l mv3">
            <Link to="/" className="dim flex items-center link ml3-l">
              <div className="dib flex mr1">
                <Logo />
              </div>
              <h1 className="ml2-l dib f6-l f5 fw7 ttu tracked white">
                <span className="fw3">Dennis</span> Cortés
              </h1>
            </Link>
          </div>

          <p className="f6-l f5 fw4 flex items-center justify-center dib mv2-l mt0 mb4 relative white">
            <span className="f3">🌦</span> <Today />
          </p>

          <ul className="list ph0-l ph3">
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/mentoring" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Mentoring
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/tools" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Tools
              </Link>
            </li>
            {/* <li className="dib mr3">
              <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Inspo ↗
              </a>
            </li> */}
            <li className="dib mr3">
              <a href="http://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Blog ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/folder" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Folder
              </Link>
            </li>
            {/* <li className="dib mr3">
              <Link to="/news" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                News
              </Link>
            </li> */}
            <li className="dib">
              <Link to="/about" className="items-center dn-l flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-rainbow w-100" style={{height: 3 + "px"}}></div>
      </div>
    );
  }
}

export default Header;
