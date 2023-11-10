import React from "react"

const Image = ({ src, srcset, alt, className, id, style, height, width, to, isLazyLoading = false }) => {
    return to ? (
        <a href={to}>
            <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} />
        </a>
    ) : (
        <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} />
    )
}

export default Image