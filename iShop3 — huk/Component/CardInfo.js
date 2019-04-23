import React from 'react';

export default class CardInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.book.title}</h2>
                <p>{this.props.book.price}</p>
                <img src={this.props.book.image}></img>
            </React.Fragment>
        )
    }
}