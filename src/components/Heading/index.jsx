import React from "react"

const Heading = ({ level = `1`, children, ...others}) => {
    const Tag = `h${level}`

    return (
        <Tag {...others}>{children}</Tag>
    )
}

export default Heading