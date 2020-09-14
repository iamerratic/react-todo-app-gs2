import React from 'react';

function withForm(Component) {

    return class Form extends React.Component {

        constructor(props) {
            super(props);

            this.state = this.props.input_meta.reduce(function (acc, val) {
                return { ...acc, [val.name]: '' };
            }, {});


            this.handleChange = this.handleChange.bind(this);
            this.reset = this.reset.bind(this);
        }

        componentDidMount() {
            var { todo } = this.props;
            if (todo) {
                var { title, description, time } = todo;
                this.setState({
                    title: title,
                    description: description,
                    time: time
                });
            }
        }


        reset() {
            this.setState({
                title: '',
                description: '',
                time: ''
            });
        }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        render() {
            var { handleChange, reset } = this;
            return <Component reset={reset} {...this.props} change={handleChange} state={this.state} />;
        }
    }
}



export default withForm;