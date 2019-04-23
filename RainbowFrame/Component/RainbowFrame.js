import React from 'react';


export default function RainbowFrame(props) {

    let wrapper = props.colors.map((v, k) => {
        return <div key={k} style={{ border: `5px solid ${v}` }}></div>
    });


    return (
        <div>
            {props.children}
            {wrapper}
        </div>
    )
}

