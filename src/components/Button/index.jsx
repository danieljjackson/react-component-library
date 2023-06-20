import React from "react"

import Link from "./../Link"

const Button = ({ to }) => {
    const isLink = to && (to.includes(`http`) || to.startsWith(`#`) || to.startsWith(`mailto`) || to.startsWith(`/`))

    const renderAsLink = () =>
        <Link to={to}>Link</Link>

    const renderAsButton = () =>
        <button>Button</button>

    return (
        isLink ? renderAsLink() : renderAsButton()
    )
}

export default Button