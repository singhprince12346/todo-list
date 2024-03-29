import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
//import tedx from '../../images/TedX.png'
import style from './style.module.scss'
import tedlogo from '../../images/lgb.png'
//import styled from "@emotion/styled"
//import { css } from "@emotion/core"




const Navbar =()=>
(
    <div className={style.sticky}>
    <div className={style.container}>
        <img src={tedlogo} className={style.tedlogo} alt='tedxlogo'/>
        <div className={style.pages}>

            <Link className={style.links} activeClassName={style.activelinks}  to="/">Home </Link>
                    <Link className={style.links} activeClassName={style.activelinks} to="/speakers">Speakers</Link>
                    <Link className={style.links} activeClassName={style.activelinks} to="/regis">Register</Link>
            <Link className={style.links} activeClassName={style.activelinks} to="/about">About</Link>
            <Link className={style.links} activeClassName={style.activelinks} to="/team">Team</Link>
            <Link className={style.links} activeClassName={style.activelinks} to="/sponsors">Sponsors</Link>

        </div>

    </div>
    </div>

    
    )







export default Navbar;
