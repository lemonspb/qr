import React from "react";
import './style.scss'
import { OpenBrowser } from "../../Assets/Icons/svg";

interface ButtonBrowserLink {
    link?: string
}

const ButtonBrowserLink = (props:ButtonBrowserLink) => {
    const { link } = props

    return (
        <a className='button-browser' href={link} > <OpenBrowser /><span>Открыть в браузере</span></a>
    )

}

export default ButtonBrowserLink