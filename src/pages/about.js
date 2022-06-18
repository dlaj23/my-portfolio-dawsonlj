// Step 1: Import React
import * as React from 'react'
import  { Link } from 'gatsby'
import Layout from "../components/layout"

// Step 2: Define component
const AboutPage = () => {
    return (
        <main>
            <Layout>
            <title>Dawson L.A. Johnson</title>
            <h1>About</h1>
            <p>blah blah blahhhhh.</p>
            <Link to="/">Home</Link>
            </Layout>
        </main>
    )
}

// Step 3: Export component

export default AboutPage
