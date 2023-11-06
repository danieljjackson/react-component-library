import React from "react"

import Link from "./../Link/index.jsx"

const Button = ({ to, className, id, style, type = "button", role = "button", openAsTab = false, onClick, children, ...others }) => {
    const isLink = to && (to.includes(`http`) || to.startsWith(`#`) || to.startsWith(`mailto`) || to.startsWith(`/`))

    const renderAsLink = () =>
        <Link {...{ to, role, className, id, style, openAsTab }} {...others}>{children}</Link>

    const renderAsButton = () =>
        <button {...{ type, id, style, className, onClick }} {...others}>{children}</button>

    return (
        isLink ? renderAsLink() : renderAsButton()
    )
}

export default Button