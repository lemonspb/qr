import React, {useState, useEffect } from "react";
import classNames from 'classnames/bind';
import './style.scss'

interface Message {
    text: string,
    showMessage: boolean
}

const Message = (props: Message) => {
    const { text, showMessage } = props;
    const [isShow, setIsShow] = useState(showMessage)
        console.log(isShow)

    useEffect(() => {
        setIsShow(showMessage)
        setTimeout(() => {
            setIsShow(false)
          }, 5000)
      }, [showMessage]) 

    return (
        <>
        {isShow && 
        <div className={'message'}>
            {text}
        </div>}
        </>
    )

}

export default Message