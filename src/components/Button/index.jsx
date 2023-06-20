import React from "react"

import Link from "./../Link/index.jsx"

const Button = ({ to, type = "button", role = "button", onClick, children, ...others }) => {
    const isLink = to && (to.includes(`http`) || to.startsWith(`#`) || to.startsWith(`mailto`) || to.startsWith(`/`))

    const renderAsLink = () =>
        <Link {...{ to, role }}>Link</Link>

    const renderAsButton = () =>
        <button {...{ type, onClick }} {...others}>Button</button>

    return (
        isLink ? renderAsLink() : renderAsButton()
    )
}

export default Button