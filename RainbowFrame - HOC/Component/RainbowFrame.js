import React from 'react';


export default function RainbowFrame(props) {
    let txt = props.children;
    return (
        <div>
            {txt}
        </div>
    )
}

