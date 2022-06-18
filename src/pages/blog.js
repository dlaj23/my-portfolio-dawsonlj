// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import  { Link, useStaticQuery, graphql } from 'gatsby'
import { sectionTitle, blogTitle, blogMeta } from '../components/blogpost.module.css'
import styles from "../components/styles/styles.css"


// Step 2: Define component
const BlogPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                            timeToRead
                            excerpt
                            id
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
    )
    return (
        <main>
            <Layout>
            <title>Blog Page</title>
            <h1 className={sectionTitle}>Its mostly Cheese</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(edge =>{
                    return (
                        <li key={edge.node.id}>
                            <h2 className={blogTitle}>
                                <Link to ={`/blog/${edge.node.fields.slug}/`}>
                                    {edge.node.frontmatter.title}
                                </Link>
                            </h2>
                            <div>
                                <span className={blogMeta}>
                                    Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                    {edge.node.timeToRead} min
                                </span>
                            </div>
                            <p>{edge.node.excerpt}</p>
                        </li>
                    )
                })}
            </ul>
            <Link to="/">Home</Link>
            </Layout>
        </main>
    )
}

// Step 3: Export component

export default BlogPage
