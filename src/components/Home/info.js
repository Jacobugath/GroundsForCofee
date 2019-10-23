import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function info() {
    return (
        <section className='py-5'>
            <div className="container">
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        We strive to put extra drops of awesomeness in everything we touch. Our crafted brews are a way we show respect for our customers, ourselves, and the universe. They are the beginning of a relationship built on trust and care that through time grows to see our stories unfold in our city.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
