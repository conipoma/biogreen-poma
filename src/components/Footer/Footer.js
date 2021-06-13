import React from 'react';
import './Footer.css'
import insta from '../../Assets/image/insta.png'
import facebook from '../../Assets/image/facebook.png'

export default function Footer() {

    return (
        <div className="FooterPage">
            <div className="redes">
                <a href="https://www.instagram.com/coni_biogreen/" target="_blank" rel='noreferrer' className="contact-links">
                    <img src={insta} className="insta-icon" width="30" height="30" alt="insta" loading="lazy"/> 
                </a>
                <a href="https://www.facebook.com/Biogreen-Chicu-104578845046049" target="_blank" rel='noreferrer' className="contact-links">
                    <img src={facebook} className="face-icon" width="33" height="33" alt="insta" loading="lazy"/> 
                </a>
            </div>
            <div className="copy">
                <p className="credits">Constanza Poma - 2021</p>
            </div>
        </div>
    )
}
