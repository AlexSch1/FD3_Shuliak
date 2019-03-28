
let itemBook = React.createClass({
    displayName: 'itemList',

    getInitialState: function() {
        return {
            select: false,
            deleted: false
        }
    },

    propTypes: {
        book: React.PropTypes.object
    },

    onSelect: function(e) {
        console.log(this.props.book.id)

        if (e.target.tagName === 'BUTTON') return;

        this.props.onClick(this.props.book.id);

        // this.setState((prev, st)=>({
        //     select: !prev.select
        // }));
    },

    onDeleteItem: function() {
        let answer = confirm('Удалить?');
        
        if (answer) {
            this.setState({
                deleted: true
            });
        }
    },

    render: function() {

        let select = '';
        if (this.props.book.id === this.props.selectedItem ) {
            select = 'select'
        }
        
        if (!this.state.deleted) {
            return React.DOM.a({ className: `item ${select}`, onClick: this.onSelect },
                React.DOM.h4({ className:'title' }, this.props.book.title),
                React.DOM.p({ className:'author' }, this.props.book.author),
                React.DOM.h4({ className:'title' }, `${this.props.book.price} руб.`),
                React.DOM.button({ onClick: this.onDeleteItem }, 'Удалить'));
        } else {
            return null;
        }
        
    }
});


let Books = React.createClass({
    displayName: 'Books component',

    propTypes: {
        titleTable: React.PropTypes.string,
        books: React.PropTypes.array
    },

    getDefaultProps: function() {
        return { titleTable: 'Какой-то список'}
    },

    onSelectItem: function(value) {
        this.setState({
            selectedItem: value
        });
    },

    getInitialState: function() {
        return {
            selectedItem: false
        }
    },

    render: function() {
        const { books, titleTable } = this.props;
        let selectedItem = this.state.selectedItem;

        let list = books.map((book) => {
            return React.createElement(itemBook, { key:book.id, book, selectedItem, onClick:this.onSelectItem }, null);
        });

        return React.DOM.div({className:'inner'}, 
            React.DOM.h1({ className:'inner__title' }, titleTable),
            React.DOM.div({ className:'inner__list' }, list),
        );
    }
})



