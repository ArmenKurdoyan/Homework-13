import React, { Component } from 'react';
import EachTodo from './EachTodo';

export default class Todos extends Component {

    render() {

        return (
            <div className="items">
                {
                    this.props.elements.map((item) => {
                        console.log(item);

                        return (
                            <div className="item" key={item.todoKey}>
                                <EachTodo item={item} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

/*
import React, { Component } from 'react';
import NewDone from './NewDone';

function IsEditing() {
    return <div className="item-title">NOOOOOOO</div>
} 

function IsNotEditing(item) {
    return <div className="item-title"></div>
}

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
        }
    }

    HandleChange(item) {
        if (item.todosEdit) {
            return <IsEditing />
        } else {
            return <IsNotEditing />
        }
    }

    render() {
        return (
            <div className="items">
                {
                    this.state.elements.map((item, index) => {

                        return (
                            <div className="item" key={index}>
                                <div className="item-top">
                                    <HandleChange item={item} />                                                              
                                </div>
                                <div className="item-bottom">
                                    <NewDone status={item.todosStatus}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
*/
