import React from 'react'
import Tour from './Tour'
import './index.css'

export default function Tours(props) {
    const { tours = [], removeTour } = props

    return (
        <section>
            <div className="title">
                <h2>All Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.length
                    ?
                    tours.map(tour =>
                        <Tour
                            {...tour}
                            key={tour.id}
                            removeTour={removeTour}
                        />)
                    :
                    <h4 className='nothing'>
                        "Nothing to show here yet!"
                    </h4>}
            </div>
        </section>
    )
}