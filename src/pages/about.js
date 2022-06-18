// Step 1: Import React
import * as React from 'react'
import  { Link } from 'gatsby'
import Layout from "../components/layout"
import styles from "../components/styles/styles.css"


// Step 2: Define component
const AboutPage = () => {
    return (
        <main>
            <Layout>
            <title>About</title>
            <h1>About</h1>
            <p>I couldn't really think of a topic to make a website on (I already have a portfolio), so I dedicated it to the delicious snack that is cheese!</p>
            <Link to="/">Home</Link>
            </Layout>
        </main>
    )
}

// Step 3: Export component

export default AboutPage
