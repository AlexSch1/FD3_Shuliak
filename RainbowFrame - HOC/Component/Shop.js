import React from 'react';
import RainbowFrame from './RainbowFrame';
import withRainbowFrame from './withRainbowFrame';

export default () => {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    const FramedFragment = withRainbowFrame(colors)(RainbowFrame);

    return(
        <FramedFragment >Hello World</FramedFragment>
    )
}


