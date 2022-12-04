import React from 'react'
import youtube from '../../assets/img/youtube.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
const Footer = () => {
    return (
        <footer>
            <article className='footer-container'>
                <div className='footer-social'>
                    <h4 className='footer-text text-center'>Follow us</h4>
                    <ul className='footer-social-icons'>
                        <li className='social-icon'> 
                            <img src={youtube} alt="youtube social" />
                        </li>
                        <li className='social-icon'>
                            <img src={facebook} alt="facebook social" />
                        </li>
                        <li className='social-icon'>
                            <img src={twitter} alt="twitter social" />
                        </li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h4 className='footer-text'>Contact</h4>
                    <ul className='footer-address'>
                        <li>2490 Leisure Lane</li>
                        <li>San Luis Obispo</li>
                        <li>California</li>
                    </ul>
                </div>
            </article>
        </footer>
    )
}

export default Footer
