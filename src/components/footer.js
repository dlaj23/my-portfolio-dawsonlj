import * as React from "react"
import {container, siteFooter} from "./footer.module.css"

const Footer = () => {
    return(
        <footer>
            <div>
                <p>Developed by Dawson Johnson &copy; {new Date().getFullYear().toString()}{" "}</p>
            </div>
        </footer>
    )

}
export default Footer