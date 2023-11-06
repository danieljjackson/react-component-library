import React from "react"

const Link = ({ to, className, id, style, role, openAsTab = false, children, ...others }) => {
    // Only set the rel attribute if an external link is rendered
    let rel = "" || undefined

    // Check to see if the link is external
    if ((to && to.startsWith(`http`)) || to.startsWith(`mailto`)) {
        rel = "noopener noreferrer"
    }

    return (
        <a href={to} {...{ id, style }} className={className} target={openAsTab ? "blank" : undefined} {...{ role, rel }} {...others}>{children}</a>
    )
}

export default Link