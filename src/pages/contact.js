// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import  { Link } from 'gatsby'

// Step 2: Define component
const ContactPage = () => {
    return (
        <main>
            <Layout>
            <title>Contact Me</title>
            <h1>Contact Info</h1>
            <Link to="/">Home</Link>
            </Layout>
        </main>
    )
}

// Step 3: Export component

export default ContactPage
