// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import  { Link } from 'gatsby'

// Step 2: Define component
const BlogPage = () => {
    return (
        <main>
            <Layout>
            <title>Blog Page</title>
            <h1>Blog</h1>
            <Link to="/">Home</Link>
            </Layout>
        </main>
    )
}

// Step 3: Export component

export default BlogPage
