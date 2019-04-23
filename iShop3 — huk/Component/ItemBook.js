import React from 'react';
import { Them } from './Shop';

export default class ItemBook extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect = (e) => {
        this.props.onClick(this.props.book);
    }

    onDeleteItem = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.book.id)
    }

    onEditItem = (e) => {
        e.stopPropagation();
        this.props.onEditBook(this.props.book.id, this.props.book)
    }

    render() {
        let select = '';
        if (this.props.book.id === this.props.selectedItem) {
            if (this.props.stateViwe === 1) {
                select = 'select'
            } else {
                select = 'edit'
            }
        }

        return (
            <Them.Consumer>
                {(val) => {
                    return (
                        <a
                            className={`item ${select}`}
                            onClick={this.onSelect}
                        >   
                            <span>{val}</span>
                            <h6 className="title">id-{this.props.book.id}</h6>
                            <h4 className="title">{this.props.book.title}</h4>
                            <p className="author">{this.props.book.author}</p>
                            <h4 className="title">{this.props.book.price} руб.</h4>
                            <button onClick={this.onEditItem}>Редактировать</button>
                            <button onClick={this.onDeleteItem}>Удалить</button>
                        </a>
                    )
                }}
            </Them.Consumer>

        )
    }
}

