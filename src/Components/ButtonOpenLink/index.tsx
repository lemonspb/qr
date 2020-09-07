import React from "react";
import './style.scss'
import Icon from '../Icon'
interface ButtonBrowserLink {
    link?: string
}

const ButtonBrowserLink = (props:ButtonBrowserLink) => {
    const { link } = props

    return (
        <a className='button-browser' href={link} >
    <Icon
    type={'openBrowser'}
    /><span>Открыть в браузере</span>
    </a>
    )

}

export default ButtonBrowserLink