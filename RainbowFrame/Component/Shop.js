import React from 'react';
import RainbowFrame from './RainbowFrame';



export default () => {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    return(
        <RainbowFrame colors={colors}>Hello World</RainbowFrame>
    )
}


