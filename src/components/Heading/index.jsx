import React from "react"

const Heading = ({ level = `1`, className, id, style, children, ...others }) => {
    const Tag = `h${level}`

    return (
        <Tag {...{ id, style }} className={className} {...others}>{children}</Tag>
    )
}

export default Heading