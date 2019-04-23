import React from 'react';

import ItemBook from './ItemBook';
import CardInfo from './CardInfo';
import CardForm from './CardForm';

function generateNewIdBook(bookList) {
    let books = [...bookList]; // клонируем исходный список что бы не менять его при сортировки
    books.sort((a,b) => {
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    });

    function getcode (num) { // рекурсивно ищем id которого нету в списке товаров он и будет новый id для нового товара
        let id = books.find(isPrime);

        function  isPrime(elem, index) {
            return num === elem.id
        }

        if (id) {
            return getcode(num + 1)
        } else {
            return num
        }
    }

    return getcode(1);
}


export default class Shop extends React.Component {

    state = {
        selectedItem: false, // -
        booksList: this.props.books,

        stateViwe: 0, // 1 - info    2 - edit   3 - new 
        changeCard: false // редактирование товара - false true
    }

    cbChangeCard = () => {
        this.setState({
            changeCard: true
        });
    }

    alertSaveChange = () => {
        if (this.state.changeCard) {
            alert('Save change to card');
            return false;
        }
        return true;
    }

    onSelectItem = (book) => {
        if (!this.alertSaveChange()) return;

        this.setState((prev, next) => ({
            selectedItem: prev.selectedItem === book.id ? false : book.id,
            stateViwe: prev.selectedItem === book.id ? 0 : 1
        }));
    }

    onDelete = (value) => {
        if (!this.alertSaveChange()) return;

        let answer = confirm('Удалить?');
        if (!answer) return;

        let newList = this.state.booksList.filter((v) => {
            return v.id !== value;
        });

        this.setState((prev, next)=>({
            booksList: newList,
            stateViwe: prev.selectedItem === value ? 0 : 1
        }));
    }

    onEditBook = (id, bookEdit) => {
        if (!this.alertSaveChange()) return;

        this.setState({
            stateViwe: 2,
            selectedItem: id
        });
    }

    onSave = (book) => {
        let newList = this.state.booksList.map((v) => {
            if (v.id === book.id) {
                return book
            } else {
                return v
            }
        });
        this.setState({
            booksList: newList,
            stateViwe: 0,
            selectedItem: false,
            changeCard: false
        });
    }

    onAdd = (book) => {
        let newList = this.state.booksList;
        newList.push(book);
        this.setState({
            booksList: newList,
            stateViwe: 0,
            selectedItem: false,
            changeCard: false
        });
    }

    onCancel = () => {
        this.setState({
            stateViwe: 0,
            selectedItem: false,
            changeCard: false
        })
    }

    onNewBook = () => {
        this.setState({
            stateViwe: 3,
            selectedItem: false
        })
    }


    render() {
        console.log(this.state);

        const { titleTable } = this.props;
        const {booksList} = this.state;
        let selectedItemID = this.state.selectedItem;
   
        let selectedItemProps = {}; 
        if (this.state.stateViwe === 3) { // если создаем новый товар - нужен шаблон объекта товара с пустыми полями
            for (let i in booksList[0]) {
                if (i === 'id') {
                    selectedItemProps[i] = generateNewIdBook(booksList); // устанавливаем id
                } else {
                    selectedItemProps[i] = '';
                }
            }
        } else {
            booksList.some((v,k) => {
                if (v.id === selectedItemID) {
                    selectedItemProps = {...v}
                }
            });
        }
        
        let list = booksList.map((book) => {
            return <ItemBook
                key={book.id}
                book={book}
                selectedItem={selectedItemID}
                stateViwe={this.state.stateViwe}
                onClick={this.onSelectItem}
                onDelete={this.onDelete}
                onEditBook={this.onEditBook}
            >
            </ItemBook>
        });

        return (<div className="inner">
                    <h1 className="inner__title">{titleTable}</h1>
                    <div className="inner__list">{list}</div>

                    { (this.state.stateViwe <= 1) && <button style={{margin:'20px'}} onClick={this.onNewBook}>NEW BOOK</button>  }

                    {(this.state.stateViwe === 1) && <CardInfo book={selectedItemProps}/>}

                    {(this.state.stateViwe === 2) && 
                        <CardForm 
                            key={selectedItemID}
                            book={selectedItemProps}
                            stateViwe={this.state.stateViwe}
                            onSave={this.onSave}
                            onCancel={this.onCancel}
                            titleCard='Product Edit'
                            cbChangeCard={this.cbChangeCard}
                        />
                    }

                    {(this.state.stateViwe === 3) && 
                        <CardForm 
                            stateViwe={this.state.stateViwe}
                            book={selectedItemProps}
                            onSave={this.onAdd}
                            onCancel={this.onCancel}
                            titleCard='Add New Product'
                            cbChangeCard={this.cbChangeCard}
                        />
                    }

            </div>
        );
    }
}


