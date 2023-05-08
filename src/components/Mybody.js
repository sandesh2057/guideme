import React from 'react'
import './mybody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMobile} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function Mybody() {
    return (
 <>
<div className="container">
    <p className="paragraph">
        <h1>Guide with us and <br/>get paid.</h1>

        <p>Guide on the platform with largest network of tourists.</p>
    </p>
    <div className="pageBox">
    <a className="btn btnbox signGuide" href="/" role="button"><FontAwesomeIcon className="bodyicon money" icon={faMoneyBill} /> Earn with GuideMe <FontAwesomeIcon className="arrow1"   icon={faArrowRight} /></a>
    <a className="btn btnbox downloadApp" href="/" role="button"><FontAwesomeIcon className="bodyicon mobile" icon={faMobile} />   Download App <FontAwesomeIcon className="arrow2"  icon={faArrowRight} /></a>
    </div>
    </div>
    </>
    );  
}


