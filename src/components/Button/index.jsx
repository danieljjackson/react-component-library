import React from "react"

import Link from "./../Link/index.jsx"

const Button = ({ to, className, type = "button", role = "button", openAsTab = false, onClick, children, ...others }) => {
    const isLink = to && (to.includes(`http`) || to.startsWith(`#`) || to.startsWith(`mailto`) || to.startsWith(`/`))

    const renderAsLink = () =>
        <Link {...{ to, role, className, openAsTab }} {...others}>{children}</Link>

    const renderAsButton = () =>
        <button {...{ type, onClick }} className={className ? className : ""} {...others}>{children}</button>

    return (
        isLink ? renderAsLink() : renderAsButton()
    )
}

export default Button