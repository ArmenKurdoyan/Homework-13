import React, {Component} from 'react';
import Count from './Count';
import List from './List';

export default class Input extends Component {

    render() {
        
        return (  
            <div>
                <Count count={this.props.data.count}/>     
                <div className="input-place-button">
                    <List data={this.props.data}/>
                </div>
            </div>
        );
    }    
}