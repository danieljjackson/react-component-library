import React from "react"

const Image = ({ src, srcset, alt, className, id, style, height, width }) => {
    return (
        <img {...{ src, srcset, alt, className, id, style, height, width }} />
    )
}

export default Image