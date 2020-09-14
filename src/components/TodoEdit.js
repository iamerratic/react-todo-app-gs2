import React from 'react';

import withForm from '../hoc/withForm';

function TodoEdit({ editTodo, reset, change, state, input_meta }) {

    function handleSubmit(event) {
        event.preventDefault();
        editTodo(state);
        reset();
    }

    return (
        <section className="App_form_wrapper">
            <form onSubmit={handleSubmit} className="App_form">
                {input_meta.map(function (input) {
                    return (
                        <div className="App_form_field" key={input.name}>
                            <label htmlFor="">{input.label}:- </label>
                            <input value={state[input.name]} onChange={change} name={input.name} type={input.type} />
                        </div>
                    );
                })}
                <button type="submit">Add Todo</button>
            </form>
        </section>
    );

}



export default withForm(TodoEdit);