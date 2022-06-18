// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import  { Link } from 'gatsby'
import { blogTitle } from '../components/blogpost.module.css'
import Card from "../components/card"

// Step 2: Define component
const IndexPage = () => {
  return (
    <main>
      <Layout>
      <title>The Cheese Zone</title>
      <h1 className={blogTitle}>Welcome to Cheese Zone</h1>
      <div>
        <Card 
          title="Cheese Designs"
          text="Designed and created in Gatsby for the love of cheese"
          image={require('../images/cz.jpg').defualt}
        />
        </div>
        <div>
        <Card 
          title="Cheese Security"
          text="How to keep your good safe"
          image={require('../images/galaxy.jpg').defualt}
        />
        </div>
        <div>
        <Card 
          title="Cheesey Ideas"
          text="Always glad to learn more!"
          image={require('../images/cheese.jpg').defualt}
        />
      </div>
      <Link to="/about">About</Link>
      </Layout>
    </main>
  )
}

// Step 3: Export component

export default IndexPage
