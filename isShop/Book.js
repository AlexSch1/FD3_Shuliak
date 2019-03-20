let Books = React.createClass({
    displayName: 'Books component',

    getDefaultProps: function() {
        return { titleTable: 'Какой-то список'}
    },

    propTypes: {
        titleTable: React.PropTypes.string,
        books: React.PropTypes.array
    },

    render: function() {
        const { books, titleTable } = this.props;

        let list = books.map((book) => {
            return React.DOM.a(
                {
                    key: book.id,
                    className: 'item',
                },
                React.DOM.h4({ className:'title' }, book.title),
                React.DOM.p({ className:'author' }, book.author),
                React.DOM.h4({ className:'title' }, `${book.price} руб.`)
            )
        });

        return React.DOM.div({className:'inner'}, 
            React.DOM.h1({ className:'inner__title' }, titleTable),
            React.DOM.div({ className:'inner__list' }, list),
        );
    }
})





