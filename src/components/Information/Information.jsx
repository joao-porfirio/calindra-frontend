import React from 'react'
import measure from '../../assets/img/metric.png'
const Information = () => {
    return (
        <section className='information-container'>
            <article className='information'>
                <article className='information-less'>
                    <h2 className='information-text text-left'>
                        We are Leader<br />
                        in Measure Tapes
                    </h2>
                    <p className='information-subtext text-left'>
                        There are 5x the circumference of planet earth in metric tapes.
                    </p>
                </article>
                <picture className='information-img'>
                    <img className='information-metric' src={measure} alt="information" />
                </picture>
            </article>
        </section>
    )
}

export default Information