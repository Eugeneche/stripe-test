import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../pages_styles/_index.module.scss"



const IndexPage = ({data}) => {
  
  
  const products = data.allStripePrice.nodes
  console.log(products)
  return (
    <Layout>
      <h1>Test</h1>
      {products.map(prod => {
        return (
          <div key={prod.id} className={styles.productWrapper}>
            <h3>{prod.product.name}</h3>
            <img src={prod.product.images[0]}></img>

          </div>
        )
      })}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query getProducts {
    allStripePrice {
      nodes {
        currency
        id
        product {
          description
          id
          name
          metadata {
            brand
            category
            description
            title
            volume
          }
          images
        }
      }
    }
  }
`
