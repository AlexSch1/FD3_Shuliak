
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
        if (e.target.tagName === 'BUTTON') return;

        this.setState((prev, st)=>({
            select: !prev.select
        }));
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
        // Вопрос в слудующем,
            // есть задача - закрасить div
                // решение - поставить ему класс у которого задается фон

        // как в таких случаяъ делать? когда  мне нужно поставить класс элементу 
        // в зависимости от (к примеру) этого показателя this.state.select true/false
        // т.е сейчас я в className передаю пустую строку, делая перед этим проверку this.state.select
        //  если this.state.select равен false то пустая страка
        // а если this.state.select равен true то передаю строку с нужным мне классом
        // 
        // Есть ли какие то более красивые методы что бы это сделать? и так ли это вообще делается?
        // 
        // И как происходит смена классов у элемента? т.е в классическом случаи делается toggleClass,
        // какая делается toggleClass/addClass/removeClass в React?
        // 
        let select = '';
        if (this.state.select) {
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

    render: function() {
        const { books, titleTable } = this.props;

        let list = books.map((book) => {
            return React.createElement(itemBook, { key:book.id, book }, null);
        });

        return React.DOM.div({className:'inner'}, 
            React.DOM.h1({ className:'inner__title' }, titleTable),
            React.DOM.div({ className:'inner__list' }, list),
        );
    }
})


// Была еще идею сделать немного по другому
//  т.е хранить состояние в компоненте Books, в его state хранился бы массив с объектами и
// когда удалялся бы item , то брался бы его id и в массиве который лежал бы в state компонента Books,  искался бы этот item(объект) c нужным id полученным при клике,
// и добавлялся бы ему какой то показатель (к примеру - delete: true)
// и при отрисовки у этих объектов проверялось бы свойсто  delete: true/false

// по итогу, какой метод более правельный? тот которым сейчас сделанно или тот которые описан выше?
// 

