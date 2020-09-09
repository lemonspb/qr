import React from "react";
import classNames from 'classnames/bind';
import './style.scss'

interface Title {
    text: string,
    className?: string,
    Tag: keyof JSX.IntrinsicElements;
    position?: string
}

const Title = (props: Title) => {
    const { Tag, className, text, position } = props;

    const title = classNames({
        title: true,
        'title--left': position === 'left',
        'title--right': position === 'right',
        'title--center': position === 'center'
    });

    return (
        <Tag className={`${title} ${className?className:''}`}>
            {text}
        </Tag>
    )

}

export default Title