import React from "react";
import { OpenBrowser, Phone } from '../../Assets/Icons/svg';


interface Title {
    type: string,
}

const Icon = (props: Title) => {
    const { type } = props;

    return (
        <div>
            {type === 'openBrowser' && <OpenBrowser />}
            {type === 'phone' && <Phone />}

        </div>
    )

}

export default Icon