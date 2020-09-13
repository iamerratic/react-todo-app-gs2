import React from 'react';



class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            time: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var { createTodo } = this.props;
        createTodo(this.state);
        this.setState({
            title: '',
            description: '',
            time: '',
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        var { title, description, time } = this.state;
        return (
            <section className="App_form_wrapper">
                <form onSubmit={this.handleSubmit} className="App_form">
                    <div className="App_form_field">
                        <label htmlFor="">Title:- </label>
                        <input value={title} onChange={this.handleChange} name="title" type="text" />
                    </div>
                    <div className="App_form_field">
                        <label htmlFor="">Description:- </label>
                        <input value={description} onChange={this.handleChange} name="description" type="text" />
                    </div>
                    <div className="App_form_field">
                        <label htmlFor="">Time:- </label>
                        <input value={time} onChange={this.handleChange} name="time" type="text" />
                    </div>
                    <button type="submit">Add Todo</button>
                </form>
            </section>
        );
    }
}



export default TodoForm;