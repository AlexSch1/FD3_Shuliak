let Books = React.createClass({
    displayName: 'Books component',

    propTypes: {
        titleTable: React.PropTypes.string,
        books: React.PropTypes.array
    },

    getDefaultProps: function () {
        return { titleTable: 'Какой-то список' }
    },

    getInitialState: function () {
        return {
            selectedItem: false,
            booksList: this.props.books
        }
    },

    onSelectItem: function (value) {
        this.setState((prev, next) => ({
            selectedItem: prev.selectedItem === value ? false : value
        }))
    },

    onDelete: function (value) {
        let answer = confirm('Удалить?');
        if (!answer) return;

        let newList = this.state.booksList.filter((v) => {
            return v.id !== value;
        });
        
        this.setState({
            booksList: newList
        })
    },

    render: function () {
        const { titleTable } = this.props;
        const booksList = this.state.booksList
        let selectedItem = this.state.selectedItem;

        let list = booksList.map((book) => {
            return React.createElement(ItemBook, 
                { 
                    key: book.id, 
                    book, 
                    selectedItem, 
                    onClick: this.onSelectItem, 
                    onDelete: this.onDelete 
                }, null);
        });

        return React.DOM.div({ className: 'inner' },
            React.DOM.h1({ className: 'inner__title' }, titleTable),
            React.DOM.div({ className: 'inner__list' }, list),
        );
    }
})



