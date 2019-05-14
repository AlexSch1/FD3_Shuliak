import React from 'react';
import ReactDOM from 'react-dom';
import book from './card.json';
import Shop from './Component/Shop.js';

let titleTable = 'Список книг';
//new
ReactDOM.render(
    <Shop books={book} titleTable={titleTable} ></Shop>,
    document.getElementById('root')
);

