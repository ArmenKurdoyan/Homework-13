import React, {Component} from 'react';
import NewDone from './NewDone';
import TitleEdit from './TitleEdit';

export default class EachTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoTitle: this.props.item.todoTitle,
            toDoStatus: this.props.item.todosStatus,
            editStatus: this.props.item.todosEdit,
            //toDoIndex: this.props.item.todoKey,
        }
        
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickStatus = this.handleClickStatus.bind(this);
        this.handleChangeEdit = this.handleChangeEdit.bind(this);
    }

    handleChangeEdit(event) {
        this.setState({
            toDoTitle: event.target.value,
        })
    }

    handleClickEdit() {
        this.setState({
            editStatus: !this.state.editStatus,
        });
    }

    handleClickStatus() {
        this.setState({toDoStatus: !this.state.toDoStatus});
    }

    render() {
        return (
            console.log(this.props.item.todoKey),
            <div>
                    <TitleEdit  
                        editStatus={this.state.editStatus}
                        toDoStatus={this.state.toDoStatus}
                        title={this.state.toDoTitle}
                        handleClickEdit={this.handleClickEdit}
                        handleChangeEdit={this.handleChangeEdit}/>
                    <NewDone
                        editStatus={this.state.editStatus}
                        toDoStatus={this.state.toDoStatus}
                        handleClickStatus={this.handleClickStatus}/>
            </div>
        );
    }
} 