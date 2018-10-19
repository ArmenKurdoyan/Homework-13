import React, {Component} from 'react';

// function Done() {
//     return (
//         <div className="item-status-done">
//             <h1 className="item-status-text">Done</h1>
//         </div>
//     );
// }

// function New() {
//     return (
//         <div className="item-status-new" onClick>
//             <h1 className="item-status-text">New</h1>
//         </div>
//     );
// }

// function Status(status) {
//     if (!status) {
//         return <Done />
//     }
//     return <New />
// }

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
                    this.props.toDoStatus && //this.props.editStatus &&
                        <div className="item-status-done" onClick={this.props.handleClickStatus}>
                            <h1 className="item-status-text">Done</h1>
                        </div>    
               } 
            </div>
            // <div>
            //     <Status props={this.props.status} />
            // </div>
            
        );
    }
}

/*

import React, {Component} from 'react';

// function Done() {
//     return (
//         <div className="item-status-done">
//             <h1 className="item-status-text">Done</h1>
//         </div>
//     );
// }

// function New() {
//     return (
//         <div className="item-status-new" onClick>
//             <h1 className="item-status-text">New</h1>
//         </div>
//     );
// }

// function Status(status) {
//     if (!status) {
//         return <Done />
//     }
//     return <New />
// }

export default class NewDone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.status,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({state: !this.state.status});
    }

    render() {
        return ( 
            
            <div>
               {
                   this.props.status && 
                <div className="item-status-new" onClick={this.handleClick}>
                   <h1 className="item-status-text">New</h1>
                </div>   
               }
               {
                    !this.props.status &&
                    <div className="item-status-done" onClick={this.handleClick}>
                        <h1 className="item-status-text">Done</h1>
                    </div>    
               } 
            </div>
            // <div>
            //     <Status props={this.props.status} />
            // </div>
            
        );
    }
}

*/