import React from "react"
import { styled } from "styled-components"

import Link from "./../Link/index.jsx"

const Button = ({ to, className, id, style, type = "button", role = "button", openAsTab = false, onClick, color, colorHover, backgroundColor, backgroundColorHover, padding, children, ...others }) => {
    const sharedStyles = `
        display: inline-block;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        color: ${props => props.color};
        background-color: ${props => props.backgroundColor};
        padding: ${props => props.padding || `1rem`};

        :hover {
            color: ${props => props.colorHover};
            background-color: ${props => props.backgroundColorHover};
        }
    `

    const ButtonStyling = styled.button`
        ${sharedStyles}
    `

    const LinkStyling = styled(Link)`
        ${sharedStyles}
    `

    const isLink = to && (to.includes(`http`) || to.startsWith(`#`) || to.startsWith(`mailto`) || to.startsWith(`/`))

    const renderAsLink = () =>
        <div>
            <LinkStyling {...{ to, role, className, id, style, color, colorHover, backgroundColor, backgroundColorHover, padding, openAsTab }} {...others}>{children}</LinkStyling>
        </div>

    const renderAsButton = () =>
        <div>
            <ButtonStyling {...{ type, id, style, className, color, colorHover, backgroundColor, backgroundColorHover, padding, onClick }} {...others}>{children}</ButtonStyling>
        </div>

    return (
        isLink ? renderAsLink() : renderAsButton()
    )
}

export default Button