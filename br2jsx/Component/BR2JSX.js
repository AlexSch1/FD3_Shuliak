import React from 'react';


export default function BR2JSX (props) {

    let txt = props.text.split(/\<br>|<br\/>|<br \/>/)
    let list = [];
    txt.forEach((v,k) => {
        list.push(v);
        if ((txt.length - 1) !== k) {
            list.push(<br/>);
        }
    });
    
    return(
        <div>
            {list}
        </div>
    )
}

