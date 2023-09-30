//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
//import tedx from '../../images/TedX.png'
import style from './style.module.scss'
import Container from '../Container/index'
import tedlogo from '../../images/lgb.png'

const LandingPage =()=>
(


<div className={style.container}>
<Container>
    <div className={style.herocontent}>


                    <p className={style.slogans}>"<span className={style.spin}></span><span className={style.red}>nity"<br/></span><img src={tedlogo} style={{height:'100px'}} alt='tedxlogo' />
                    <p style={{ fontStyle: 'italic', fontSize: '20px' }}>Tending To <span className={style.red}> Infinity</span></p> </p>
    </div>
            </Container>
</div>


)


export default LandingPage;
