import React from 'react';

class CompanyEdit extends React.PureComponent {
    
    viewVelcome = () => {
        this.props.companyEmitter.emit('companyView', 1);
    }
    viewMts = () => {
        this.props.companyEmitter.emit('companyView', 2);
    }
    viewAll = () => {
        this.props.companyEmitter.emit('companyView', 0);
    }

    render() {
        const {company} = this.props;
        let companyEditStr = company === 1 ? 'Velcome' : company === 2 ? 'MTS' : 'Все';
        return ( 
            <div className="company">
                <input type="button" value="Velcome" onClick={this.viewVelcome}></input>
                <input type="button" value="MTS" onClick={this.viewMts}></input>
                <input type="button" value="Вcе" onClick={this.viewAll}></input>
                <p>Компания: {companyEditStr}</p>
            </div>    
        );
    }
}

export default CompanyEdit;