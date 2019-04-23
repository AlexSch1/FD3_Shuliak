import React from 'react';
import Input from './Input';

function isNumeric(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

export default class CardForm extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        title: this.props.book.title,
        author: this.props.book.author,
        price: this.props.book.price,

        titleValid: '',
        authorValid: '',
        priceValid: '',
        validateForm: this.props.stateViwe === 2 ? true : false
    }

    // static getDerivedStateFromProps  (nextProps,prevState) {console.log('getDerivedStateFromProps');}
    componentWillReceiveProps = (newProps) => {      console.log('componentWillReceiveProps'); };
    shouldComponentUpdate = () => {      console.log('shouldComponentUpdate');  return true};
    componentWillUpdate = () => {                   console.log('componentWillUpdate');       };
    componentDidUpdate = (oldProps, oldState) => {  console.log('componentDidUpdate');        };
    componentWillMount = () => {                    console.log('componentWillMount');        };
    componentDidMount = () => {                     console.log('componentDidMount');         };
    componentWillUnmount = () => {                  console.log('componentWillUnmount');      };


    save = (e) => {
        e.preventDefault();

        // if (!this.isFormValid()) return;
        // if (!this.state.validateForm) {
        //     return;
        // }
        if (this.isTitleValid(this.state.title) && this.isAuthorValid(this.state.author) && this.isPriceValid(this.state.price)) {
            this.props.onSave({
                ...this.props.book,
                title: this.state.title,
                author: this.state.author,
                price: this.state.price
            });
        }
    }

    isFormValid = (name) => {
        let validateForm = true;
        switch(name) {
            case 'title':
                if (!this.isTitleValid(this.state.title)) {
                    validateForm = false;
                }
                break;
            case 'author':
                if (!this.isAuthorValid(this.state.author)) {
                    validateForm = false;
                }
                break;
            case 'price':
                if (!this.isPriceValid(this.state.price)) {
                    validateForm = false;
                }
                break;
            default:
                break;
        }

        this.setState({
            validateForm
        });

        this.props.cbChangeCard();
    }

    isTitleValid = (title) => {
        let titleValid = '';
        if (title === '') {
            titleValid = 'field is empty'
            this.setState({
                titleValid
            });
            return false
        }

        if (title.length < 3) {
            titleValid = 'min length 3';
            this.setState({
                titleValid
            });
            return false
        }

        this.setState({
            titleValid
        });
        return true
    }
    isAuthorValid = (author) => {
        let authorValid = '';
        if (author === '') {
            authorValid = 'field is empty'
            this.setState({
                authorValid
            });
            return false
        }

        if (author.length < 5) {
            authorValid = 'min length 5';
            this.setState({
                authorValid
            });
            return false
        }

        this.setState({
            authorValid
        });
        return true
    }
    isPriceValid = (price) => {
        let isValid = true;
        let priceValid = '';
        if (!isNumeric(price)) {
            priceValid = 'not number'
            isValid = false;
        }
        this.setState({
            priceValid
        });
        return isValid;
    }

    onChangeTitle = (value) => {
        this.setState({
            title: value
        }, ()=>{this.isFormValid('title')})
    }

    onChangeAuthor = (value) => {
        this.setState({
            author: value
        }, ()=>{this.isFormValid('author')})
    }

    onChangePrice = (value) => {
        this.setState({
            price: value
        }, ()=>{this.isFormValid('price')})
    }


    render() {
        return (
            <div>
                <h2>{this.props.titleCard}</h2>
                <h4>Book id {this.props.book.id}</h4>
                <div className="wr_i">
                    <span>Title</span>
                    <Input
                        name='title'
                        type='text'
                        value={this.state.title}
                        handler={this.onChangeTitle}
                    ></Input>
                    <span style={{color:'red'}}>{this.state.titleValid}</span>
                </div>
                <div className="wr_i">
                    <span>author</span>
                    <Input
                        name='author'
                        type='text'
                        value={this.state.author}
                        handler={this.onChangeAuthor}
                    ></Input>
                    <span style={{color:'red'}}>{this.state.authorValid}</span>
                </div>
                <div className="wr_i">
                    <span>Price</span>
                    <Input
                        name='price'
                        type='text'
                        value={this.state.price}
                        handler={this.onChangePrice}
                    ></Input>
                    <span style={{color:'red'}}>{this.state.priceValid}</span>
                </div>
                <button  onClick={this.save}>
                    {this.props.stateViwe === 2 ? 'save' : 'add'}
                </button>
                <button onClick={this.props.onCancel}>cancel</button>
            </div>
        )
    }
}