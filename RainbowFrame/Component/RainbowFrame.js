import React from 'react';


export default function RainbowFrame(props) {
    let txt = props.children;

    props.colors.forEach((v, k) => {
        txt = <div key={k} style={{ border: `5px solid ${v}` }}>{txt}</div>
    });


    return (
        <div>
            {txt}
        </div>
    )
}

