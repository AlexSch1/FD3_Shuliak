import React from 'react';


export default function BR2JSX (props) {

    let txt = props.text.split(/\<br>|<br\/>|<br \/>/);
    // let txt = props.text.split(/\<br_*\/?>/i);
    let list = [];
    txt.forEach((v,k) => {
        // list.push(v);
        // if ((txt.length - 1) !== k) {
        //     list.push(<br key={k}/>);
        // }
        if (i) {
            list.push(<br key={k}/>);
            list.push(v);
        }
    });
    
    return(
        <div>
            {list}
        </div>
    )
}

