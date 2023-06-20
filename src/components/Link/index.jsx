import React from "react"

const Link = ({ to, role, openAsTab = false, children, ...others }) => {
    let rel = ""

    // Check to see if the link is external
    if ((to && to.startsWith(`http`)) || to.startsWith(`mailto`)) {
        rel = "noopener noreferrer"
    }

    return (
        <a href={to} target={openAsTab ? "blank" : undefined} {...{ role, rel }} {...others}>{children}</a>
    )
}

export default Link