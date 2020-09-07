import React from "react";
import './style.scss'
import Icon from '../Icon'
interface ButtonBrowserLink {
    link?: string
}

const ButtonBrowserLink = (props: ButtonBrowserLink) => {
    const { link } = props

    return (
        <a className='button-browser' href={link} target='_blank' >
            <Icon
                type={'openBrowser'}/>
            <span>Открыть в новой вкладке браузера</span>
        </a>
    )

}

export default ButtonBrowserLink