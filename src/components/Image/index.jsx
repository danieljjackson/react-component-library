import React from "react"
import Link from "../Link/"

const Image = ({ src, srcset, alt, className, id, style, height, width, to, openAsTab = false, isLazyLoading = false }) => {
    return to ? (
        <Link {...{ to, openAsTab }}>
            <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} />
        </Link>
    ) : (
        <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} />
    )
}

export default Image