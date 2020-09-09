import React, {useState, useEffect } from "react";
import classNames from 'classnames/bind';
import './style.scss'

interface Message {
    text: string,
    showMessage: boolean,
    setMessage: Function
}

const Message = (props: Message) => {
    const { text, showMessage,setMessage } = props;
    const [isShow, setIsShow] = useState(showMessage)

    useEffect(() => {
        setIsShow(showMessage)
        
        setTimeout(() => {
            setMessage(false)
          }, 5000)
      }, [showMessage]) 

      console.log(isShow,'+++++++++++++++++++++++')

      const message = classNames({
         message: true,
        'message--visible':!isShow,
        'message--hide': isShow,
    });


    return (
        <>
    
        <div className={message}>
            {text}
        </div>
        </>
    )

}

export default Message