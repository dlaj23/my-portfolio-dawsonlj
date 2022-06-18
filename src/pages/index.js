// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import  { Link } from 'gatsby'

// Step 2: Define component
const IndexPage = () => {
  return (
    <main>
      <Layout>
      <title>My Personal Portfolio</title>
      <h1>Welcome to my website.</h1>
      <p>This is my homepage.</p>
      <Link to="/about">About</Link>
      </Layout>
    </main>
  )
}

// Step 3: Export component

export default IndexPage
