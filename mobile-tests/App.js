import React from 'react';
import ReactDOM from 'react-dom';
import Mobile from './Component/Mobile';

import './App.css';

const clients = [
    {name: 'Ivanov', id: 1, balance: 150, status: 'active', provider: 'mts'},
    {name: 'Sidorov', id: 2, balance: 200, status: 'active', provider: 'velcome'},
    {name: 'Petrov', id: 3, balance: 150, status: 'active', provider: 'mts'},
    {name: 'Gregor', id: 4, balance: 70, status: 'active', provider: 'velcome'},
    {name: 'Smit', id: 5, balance: 320, status: 'active', provider: 'velcome'},
    {name: 'Petr', id: 6, balance: 150, status: 'active', provider: 'mts'},
    {name: 'Matros', id: 7, balance: -50, status: 'blocked', provider: 'mts'},
];

//new sdfdsf
ReactDOM.render(
    <Mobile clients={clients}></Mobile>,
    document.getElementById('root')
);

