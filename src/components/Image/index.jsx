import React from "react"
import Link from "../Link/"

const Image = ({ src, srcset, alt, className, id, style, height, width, to, openAsTab = false, isLazyLoading = false, ...others }) => {
    const imageProps = {
        src,
        srcset,
        alt,
        className,
        id,
        style,
        height,
        width,
        loading: isLazyLoading ? "lazy" : undefined,
        ...others,
    }

    return to ? (
        <Link {...{ to, openAsTab }}>
            <img {...imageProps} />
        </Link>
    ) : (
        <img {...imageProps} />
    )
}

export default Image