import React from 'react';

class EditCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.balanceRef = React.createRef();

        this.state = {
            client: this.props.client,
        }
    }

    saveEditClient = () => {
        let status = +this.balanceRef.current.value <= 0 ? 'blocked' : 'active';
        let clientChanged = {
            ...this.state.client,
            name: this.nameRef.current.value,
            balance: +this.balanceRef.current.value,
            status,
        }
        this.props.saveEditEmitter.emit('saveEdit', clientChanged);
    }

    render() {
        const {client} = this.state;

        return (
            <form action="#" className="edit_card">
                <label>
                    <span>Имя: </span>
                    <input type="text" defaultValue={client.name} ref={this.nameRef}></input>
                </label>
                <label>
                    <span>Баланс: </span>
                    <input type="text" defaultValue={client.balance} ref={this.balanceRef}></input>
                </label>
                <div>
                    <input type="button" value="save" onClick={this.saveEditClient}></input>
                </div>
            </form>
        );
    }
}

export default EditCard;