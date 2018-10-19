import React, {Component} from 'react';

export default class List extends Component {

    render() {
        
        return (
            <div>
                <input 
                    placeholder="Create new To Do" 
                    className="create-text" 
                    onChange={this.props.data.handleChange} />
                <input 
                    type="button" 
                    className="create" 
                    value="Create" 
                    title={this.props.data.title} 
                    onClick={this.props.data.handleCreate} 
                    disabled={!this.props.data.title}/>
            </div>
        );
    }
}