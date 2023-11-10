import React from "react"

const Image = ({ src, srcset, alt, className, id, style, height, width, isLazyLoading = false }) => {
    return (
        <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} />
    )
}

export default Image