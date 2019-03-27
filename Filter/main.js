const list = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Possimus', 'reiciendis'
]

ReactDOM.render(React.createElement(Books, {myArr: list}), document.getElementById('root'));