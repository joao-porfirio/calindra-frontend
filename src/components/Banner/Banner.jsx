import React from 'react'
import banner from '../../assets/img/banner.png'
const Banner = () => {
	return (
		<main>
			<section className='banner'>
				<article className='banner-side'>
					<h1 className='banner-text'>
						Measuring
						everything
					</h1>
				</article>
				<article className='banner-side'>
					<img src={banner} alt="banner" />
				</article>
			</section>
		</main>
	)
}

export default Banner