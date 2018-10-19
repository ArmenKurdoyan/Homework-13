import React, {Component} from 'react';

export default class NewDone extends Component {

    render() {
        return ( 
            <div className="item-bottom">
               {
                   !this.props.toDoStatus &&  
                        <div className="item-status-new" onClick={this.props.handleClickStatus}>
                            <h1 className="item-status-text">New</h1>
                        </div>   
               }
               {
                    this.props.toDoStatus &&
                        <div className="item-status-done" onClick={this.props.handleClickStatus}>
                            <h1 className="item-status-text">Done</h1>
                        </div>    
               } 
            </div>
        );
    }
}