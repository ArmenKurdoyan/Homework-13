import React, {Component} from 'react';
import img from '../images/edit.png'; 

export default class titleEdit extends Component {

    render() {
        return (
            console.log(this.props.toDoStatus),

            <div>
                {
                    this.props.editStatus && 
                        <div className="edit-place">
                            <input placeholder="Edit your ToDo" 
                                className="edit-text"
                                value={this.props.title} 
                                onChange={this.props.handleChangeEdit} />
                            <input 
                                type="button" 
                                className="edit-button" 
                                value="Update" 
                                title={this.props.title} 
                                onClick={this.props.handleClickEdit} 
                                disabled={!this.props.title}/>
                        </div>
                }
                {
                    !this.props.editStatus && this.props.toDoStatus &&
                        <div className="item-top">
                            <div className="item-title">{this.props.title}</div>
                        </div>
                }
                {
                    !this.props.editStatus && !this.props.toDoStatus && 
                        <div className="item-top">
                            <div className="item-title">{this.props.title}</div>
                            <img className="image"
                                onClick={this.props.handleClickEdit}
                                src={img}
                                alt="edit"/>
                        </div>
                }
            </div>
        );
    }
}
