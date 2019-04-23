import React from 'react';
import ReactDOM from 'react-dom';
import book from './card.json';
import Shop, {Shop2} from './Component/Shop.js';

let titleTable = 'Список книг';

ReactDOM.render(
    <Shop books={book} titleTable={titleTable} ></Shop>,
    document.getElementById('root')
);

ReactDOM.render(
    <Shop2 books={book} titleTable={titleTable} ></Shop2>,
    document.getElementById('root2')
);