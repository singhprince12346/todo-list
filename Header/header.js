//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react';
import componentDidMount from 'react';

//import TedLogo from '../../images/1.png';
import NavBar from '../Navbar/index'


function myfunc() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sticky").style.fontSize = "15px";
    } else {
        document.getElementById("sticky").style.fontSize = "25px";
    }
}

const Header = ({ siteTitle }) => (
    <div onScroll="myfunc()">
    <div id="sticky">
        <NavBar />


        </div>
        </div>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

 

export default Header
