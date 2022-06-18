import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { sectionTitle, blogTitle, blogMeta } from '../components/blogpost.module.css'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug} }) {
            frontmatter {
                title
                date
            }
            timeToRead
            html
        }
    }`
const BlogPost = props => {
    return (
        <Layout>
            <div>
                <h1 className={blogTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
                <span className={blogMeta}>
                    Posted on {props.data.markdownRemark.frontmatter.date}{" "}
                    <span> / </span> {props.data.markdownRemark.timeToRead} min
                </span>
                <div
                    dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}
                    ></div>
            </div>
        </Layout>
    )
}

export default BlogPost