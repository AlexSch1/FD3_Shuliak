import React from 'react';
import ListItem from './ListItem';
import Filters from './Filters';
import CompanyEdit from './CompanyEdit';
import { EventEmitter } from 'events';
import EditCard from './EditCard';
import NewCard from './NewCard';

export default class Mobile extends React.PureComponent {
    constructor(props) {
        super(props);
    }
   
    componentDidMount = () => {
        this.filtersEmitter.addListener('filters', this.filtersChange);
        this.delEmitter.addListener('delete', this.delItem);
        this.editEmitter.addListener('edit', this.editClient);
        this.saveEditEmitter.addListener('saveEdit', this.saveEditClient);
        this.saveNewEmitter.addListener('saveNew', this.saveNewClient);
        this.companyEmitter.addListener('companyView', this.changeCopmanyView);
    };

    state = {
        clients: this.props.clients,

        filter: {
            all: true,
            active: false,
            block: false
        },

        company: 0, // 1 - velcome // 2 - mts // 0 - all
        editClient: null,
        newCard: 1, // 1 newCard close - btn show// 2 - newCard open - btn hide // 0 newCard hide - btn hide
    }

    filtersEmitter = new EventEmitter();
    filtersChange = (e) => {
        const { filter } = this.state;
        let filterNew;

        if (filter[e.name] !== e.active) {
            filterNew = {
                ...filter,
                all: false,
                active: false,
                block: false,
                [e.name]: e.active
            };

            this.setState({
                filter: filterNew,
            });
        }
    };

    delEmitter = new EventEmitter();
    delItem = (itemIdWillDel) => {
        let clientsNew = [...this.state.clients];

        clientsNew = clientsNew.filter((client) => {
            if (client.id !== itemIdWillDel) {
                return client;
            }
        });

        this.setState({
            clients: clientsNew,
            editClient: null,
            newCard: 1,
        });
    }

    editEmitter = new EventEmitter();
    editClient = (editClient) => {
        this.setState({
            editClient,
            newCard: 0,
        });
    }

    saveEditEmitter = new EventEmitter();
    saveEditClient = (clientChanged) => {
        let clientsNew = [...this.state.clients];
        let changed = false;
        clientsNew = clientsNew.map((client) => {
            if (client.id === clientChanged.id) {
                if ((client.name !== clientChanged.name) || (client.balance !== clientChanged.balance)) {
                    changed = true;
                }
                return clientChanged;
            } else {
                return client;
            }
        });

        if (changed) { // Если поля были изменены, то меняем клиента и закрываем карточку
            this.setState({
                clients: clientsNew,
                editClient: null,
                newCard: 1,
            });
        } else {
            this.setState({ // Если коля не менялись, то закрываем карточку не меняя клиента
                editClient: null,
                newCard: 1,
            });
        }
    }

    saveNewEmitter = new EventEmitter();
    saveNewClient = (newClient) => {
        let clientsNew = [...this.state.clients];
        clientsNew.push(newClient);

        this.setState({
            clients: clientsNew,
            newCard: 1,
        });
    }

    changeNewClient = () => {
        this.setState({
            newCard: 2,
        });
    }

    companyEmitter = new EventEmitter();
    changeCopmanyView = (company) => {
        if (company !== this.state.company) {
            this.setState({
                company,
            });
        }
    }


    render() {

        const { filter, editClient, newCard, company } = this.state;
        let items;
        let clientsList = this.state.clients;

        // Формируем список по названию провайдера 1 - velcome // 2 - mts // 0 - all
        if (company === 1) {
            clientsList = clientsList.filter((client) => {
                if (client.provider === 'velcome') {
                    return client;
                }
            });
        } else if (company === 2) {
            clientsList = clientsList.filter((client) => {
                if (client.provider === 'mts') {
                    return client;
                }
            });
        }

        // формируем список по фильтрам все / активные / заблакированные
        if (filter.all) {
            items = clientsList.map((client) => {
                return <ListItem key={client.id} client={client} delEmitter={this.delEmitter} editEmitter={this.editEmitter} />
            });
        }
        if (filter.active) {
            items = clientsList.map((client) => {
                if (client.status === 'active') {
                    return <ListItem key={client.id} client={client} delEmitter={this.delEmitter} editEmitter={this.editEmitter} />
                }
            });
        }
        if (filter.block) {
            items = clientsList.map((client) => {
                if (client.status === 'blocked') {
                    return <ListItem key={client.id} client={client} delEmitter={this.delEmitter} editEmitter={this.editEmitter} />
                }
            });
        }

        return (
            <div>
                {/* Вибор компании */}
                <CompanyEdit company={company} companyEmitter={this.companyEmitter}/>

                {/* Фильтры */}
                <Filters filtersEmitter={this.filtersEmitter} filter={filter} />

                <div className="header list_item">
                    <div onClick={this.delItem}>Имя</div>
                    <div>Баланс</div>
                    <div>Статус</div>
                    <div>Редактировать</div>
                    <div>Удалить</div>
                </div>
                <div>
                    {items}
                </div>

                {/* Форма редактиров. карточки */}
                {
                    editClient && <EditCard key={editClient.id} client={editClient} saveEditEmitter={this.saveEditEmitter} />
                }

                <div className="new_client">
                    {/* Кнопка добавить + форма заполнения для новой карточки */}
                    <NewCard saveNewEmitter={this.saveNewEmitter} onClick={this.changeNewClient} newCard={newCard} />
                </div>
            </div>

        )
    }
}
