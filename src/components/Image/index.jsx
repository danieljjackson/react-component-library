import React from "react"
import Link from "../Link/"

const Image = ({ src, srcset, alt, className, id, style, height, width, to, openAsTab = false, isLazyLoading = false, ...others }) => {
    return to ? (
        <Link {...{ to, openAsTab }}>
            <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} {...others} />
        </Link>
    ) : (
        <img {...{ src, srcset, alt, className, id, style, height, width }} loading={isLazyLoading ? "lazy" : undefined} {...others} />
    )
}

export default Image