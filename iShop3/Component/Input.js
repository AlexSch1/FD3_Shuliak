import React from 'react';

export default class Input extends React.Component {
   
    render() {
        return (
            <div>
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={e => this.props.handler(e.target.value)}
                >
                </input>
            </div>

        )
    }
}