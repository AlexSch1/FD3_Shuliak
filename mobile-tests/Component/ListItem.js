import React from 'react';

export default class ListItem extends React.PureComponent {

    delItem = () => {
        const {id} = this.props.client;
        this.props.delEmitter.emit('delete', id);
    }

    editClient = () => {
        this.props.editEmitter.emit('edit', this.props.client);
    }

    render() {
        const {client} = this.props;
        const classActivate = client.status === 'active' ? 'status_active' : 'status_block'

        return(
            <div className="list_item">
                <div>
                    {client.name}
                </div>
                <div>
                    {client.balance}
                </div>
                <div className={classActivate}>
                    {client.status}
                </div>
                <div>
                    <input type="button" value="Редактировать" onClick={this.editClient}></input>
                </div>
                <div>
                    <input type="button" onClick={this.delItem} value="Удалить"></input>
                </div>
            </div>
        )
    }
}