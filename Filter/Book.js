let Books = React.createClass({
    displayName: 'Component1',

    propTypes: {
        stringArr: React.PropTypes.array
    },

    getInitialState: function () {
        return {
            list: this.props.myArr,
            listSort: false,
            filterText: ''
        }
    },

    onTextChange: function (e) {
        this.setState({
            filterText: e.target.value
        });
    },

    onChangeSort: function(e) {
        this.setState({
            listSort: e.target.checked
        });
    },

    onRestartFilter: function(e) {
        e.preventDefault();
        this.setState({
            listSort: false,
            filterText: '',
        });
    },

    render: function () {
        
        let findText = this.state.filterText;
        let listFilter = [];
        let arrFromFilter = this.state.list.slice();
        // копируем массив, что бы не менять исходный массив, при необходимости сортирови

        // Если выбрана сортировка по алфавиту, то делаем сортировку массива
        if (this.state.listSort) {
            arrFromFilter.sort((a,b) => {
                if (a.toLowerCase() < b.toLowerCase()) return -1
            });
        }

        arrFromFilter.forEach((v) => {
            
            // Фильтрация - поиск совпадений из input['text]
            if (v.toLowerCase().indexOf(findText.toLowerCase()) === -1) {
                return;
            }

            const key = getKey(v);
            
            listFilter.push(React.DOM.p({key: key}, v))
        });

        return React.DOM.div(null,
            React.DOM.label(
                null, 
                'По алфавиту', 
                React.DOM.input(
                    { 
                        type: 'checkbox', 
                        checked: this.state.listSort,
                        onChange:this.onChangeSort 
                    }
                )
            ),
            React.DOM.input(
                { 
                    type: 'text', 
                    value:this.state.filterText, 
                    onChange: this.onTextChange 
                }
            ),
            React.DOM.input(
                { 
                    type: 'button', 
                    value: 'Сброс', 
                    onClick: this.onRestartFilter 
                }
            ),
            React.DOM.div(
                { 
                    className: 'wrap__list' 
                }, 
                listFilter
            ),
        );
    }
})


function getKey(str) {
    let key = 0;
    for (let i = 0; i < str.length; i++) {
        key += str.charCodeAt(i); // числовое значение Юникода для символа
    }
    return key.toString();
}
