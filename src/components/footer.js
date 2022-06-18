import * as React from "react"
import {container, siteFooter} from "./footer.module.css"
import  { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return(
        <footer>
            <div>
                <p>Developed by {data.site.siteMetadata.author} &copy; {new Date().getFullYear().toString()}{" "}</p>
            </div>
        </footer>
    )

}
export default Footer