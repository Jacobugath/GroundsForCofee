import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import {StaticQuery, graphql} from 'gatsby'
export default function Products() {
    return (
        <StaticQuery query={graphql`{
            products:
            allContentfulCoffeeProduct{
              edges{
                node{
                  id
                  tittle
                  price
                  image{
                    fluid(maxHeight: 426){
                      src
                      ...GatsbyContentfulFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }`} render={data=>{
            return(
                <section className='py-5'>
                    <div className="container">
                        <Title title='Our Products'/>
                        <div className="row">
                            {data.products.edges.map(({node:product})=>{
                                return(
                                    <Product key={product.id} product={product}/>
                                )
                            })}
                        </div>
                    </div>

                </section>
            )
        }}/>
    )
}
