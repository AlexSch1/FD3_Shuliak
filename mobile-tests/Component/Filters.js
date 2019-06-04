import React from 'react';

class Filters extends React.PureComponent {


    filterAll = () => {
        this.props.filtersEmitter.emit('filters', { name: 'all', active: true })
    }
    filterActive = () => {
        this.props.filtersEmitter.emit('filters', { name: 'active', active: true })
    }
    filterBlock = () => {
        this.props.filtersEmitter.emit('filters', { name: 'block', active: true })
    }

    render() {
        const { filter } = this.props;

        return (
            <div className="filters">
                <b>фильтры: </b>
                <input type="button" onClick={this.filterAll} value='Все' ></input>
                <input type="button" onClick={this.filterActive} value='Активные' ></input>
                <input type="button" onClick={this.filterBlock} value='Заблакированные' ></input>
                <div>
                    <p>
                        {filter.all ? 'all +' : 'all -'}
                    </p>
                    <p>
                        {filter.active ? 'active +' : 'active -'}
                    </p>
                    <p>
                        {filter.block ? 'block +' : 'block -'}
                    </p>
                </div>
            </div>
        );
    }
}

export default Filters;