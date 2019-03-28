
let ItemBook = React.createClass({
    displayName: 'itemBook component',

    propTypes: {
        book: React.PropTypes.object
    },

    onSelect: function (e) {
        this.props.onClick(this.props.book.id);
    },

    onDeleteItem: function (e) {
        e.stopPropagation();
        this.props.onDelete(this.props.book.id)
    },

    render: function () {
        let select = '';

        if (this.props.book.id === this.props.selectedItem) {
            select = 'select'
        }

        return React.DOM.a({ className: `item ${select}`, onClick: this.onSelect },
            React.DOM.h4({ className: 'title' }, this.props.book.title),
            React.DOM.p({ className: 'author' }, this.props.book.author),
            React.DOM.h4({ className: 'title' }, `${this.props.book.price} руб.`),
            React.DOM.button({ onClick: this.onDeleteItem }, 'Удалить'));

    }
});