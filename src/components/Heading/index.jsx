import React from "react"

const Heading = ({ level = `1`, className, children, ...others }) => {
    const Tag = `h${level}`

    return (
        <Tag className={`${className} || ""}`} {...others}>{children}</Tag>
    )
}

export default Heading