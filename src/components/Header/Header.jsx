
import React from 'react'
import '../../css/reset.css'
import '../../css/style.css'
import logo from '../../assets/img/logo.svg'
import mobileIcon from '../../assets/img/mobile-nav.png'
const Header = () => {
	return (
		<header className="header">
			<nav className="brand__navbar">
				<div className="brand__container">
                    <div className='brand-mobile-icon'>
                        <img src={mobileIcon} alt="icon mobile"/>
                    </div>
					<div className="brand__div">
						<ul className="brand__identidade">
							<li className="brand__logo">
                                <img src={logo} alt="logo zutterman"/>
                            </li>
                            <div className='ml-2'>
                                <li className="brand-name">zutterman</li>
                                <li className="brand-surname">Measure Tapes</li>
                            </div>
						</ul>
					</div>
					<div className="brand__div">
						<ul className="brand__itens">
                            <li className="brand__item">ABOUT US</li>
                            <li className="brand__item">MODELS</li>
                            <li className="brand__item">GUARANTEE</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header