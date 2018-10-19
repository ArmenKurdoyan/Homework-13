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

/* 
<input placeholder="Edit your ToDo" 
                        className="text" onChange={this.props.handleChangeEdit} />
                <input 
                    type="button" 
                    className="create" 
                    value="Create" 
                    title={this.props.data.title} 
                    onClick={this.props.data.handleCreate} 
                    disabled={!this.props.data.title}/>
*/

/* <div class="item">
    <div class="item-top">
        <div class="item-title">delectus aut autem</div>
        <img class="image" src="file:///D:/AK/ACA/ACA%20JS/Homework%2013/images/edit.png">
    </div>
    <div class="item-bottom">
        <div class="item-status-new">
            <h1 class="item-status-text">New</h1>
        </div>
    </div>
</div> */