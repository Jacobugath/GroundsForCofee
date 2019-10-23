import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/info'
import Menu from '../components/Home/menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
      <BackgroundSection img={data.img.childImageSharp.fluid} title='Grounds For Coffee' styleClass="default-background"/>
      <Info/>
      <Menu items={data.menu}/>
      <Products/>
      <Contact/>
    </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "coffee.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        description{description}
        price
        category
        image{
          fixed(width:50, height:50){
            src
          }
        }
      }
    }
  }
}
`


export default IndexPage
