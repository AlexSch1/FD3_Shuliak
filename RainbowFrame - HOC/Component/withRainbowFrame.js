import React from 'react';

function withRainbowFrame(colors) {
    return (Component) => {
        return (props) => {
            let wrap = <Component {...props}/>;
            colors.forEach((v, k) => {
                wrap = <div key={k} style={{ border: `5px solid ${v}` }}>{wrap}</div>
            });
            return (
                <React.Fragment>{wrap}</React.Fragment>
            )
        }
    }
}
 
export default withRainbowFrame;