import React from "react"

const Link = ({ to, openAsTab = false, children, ...others }) => {
    return (
        <a href={to} target={openAsTab ? "blank" : undefined} {...others}>{children}</a>
    )
}

export default Link