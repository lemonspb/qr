import React from "react";
import classNames from 'classnames/bind';
import './style.scss'

interface Title {
    text: string,
}

const Message = (props: Title) => {
    const { text } = props;


    return (
        <div className={'message'}>
            {text}
        </div>
    )

}

export default Message