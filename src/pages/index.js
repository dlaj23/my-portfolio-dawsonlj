// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import  { Link } from 'gatsby'
import { blogTitle } from '../components/blogpost.module.css'
import Card from "../components/card"
import styles from "../components/styles/styles.css"

// Step 2: Define component
const IndexPage = () => {
  return (
    <main>
      <Layout>
      <title>The Cheese Zone</title>
      <h1 className={blogTitle}>Welcome to Cheese Zone</h1>
      <div className="cardGroup">
        <Card 
          title="Cheese Designs"
          text="Designed and created in Gatsby for the love of cheese"
          image={require('../images/feta.jpg').default}
        />
        <Card 
          title="Cheese Security"
          text="How to keep your good safe"
          image={require('../images/gouda.jpg').default}
        />
        <Card 
          title="Cheesey Ideas"
          text="Always glad to learn more!"
          image={require('../images/chevre.jpg').default}
        />
      </div>
      <Link to="/about">About</Link>
      </Layout>
    </main>
  )
}

// Step 3: Export component

export default IndexPage
