import React, {Component} from 'react';

export default class Count extends Component {

    render() {
        
        return (
            <div>
                <h1>To Do List</h1>
                <p className="total-todos">Total {this.props.count} todo</p>
            </div>
        );
    }
}