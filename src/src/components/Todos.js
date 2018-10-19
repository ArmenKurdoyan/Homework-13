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
