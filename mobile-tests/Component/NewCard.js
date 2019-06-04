import React from 'react';

class NewCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.balanceRef = React.createRef();
        this.providerRef = React.createRef();

    }

    saveNewClient = () => {
        let status = this.balanceRef.current.value > 0 ? 'active' : 'blocked';
        let newClient = {
            name: this.nameRef.current.value,
            balance: this.balanceRef.current.value,
            provider: this.providerRef.current.value,
            id: Math.round(Math.random() * Math.pow(5, 10)),
            status,
        }
        this.props.saveNewEmitter.emit('saveNew', newClient);
    }

    render() {

        if (this.props.newCard === 1) {
            return (
                <input type="button" value="Добавить клиента" onClick={this.props.onClick}></input>
            )
        } else if (this.props.newCard === 2) {
            return (
                <form action="#" className="save_card">
                    <label>
                        <span>Имя: </span>
                        <input type="text"  ref={this.nameRef}></input>
                    </label>
                    <label>
                        <span>Баланс: </span>
                        <input type="text"  ref={this.balanceRef}></input>
                    </label>
                    <label>
                        <span>Провайдер: </span>
                        <input type="text" ref={this.providerRef}></input>
                    </label>
                    <div>
                        <input type="button" value="save" onClick={this.saveNewClient}></input>
                    </div>
                </form>
            );
        }

        return null

        
    }
}

export default NewCard;