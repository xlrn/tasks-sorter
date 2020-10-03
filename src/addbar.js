import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgrey' : 'white')};
`;

export default class AddBar extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onHandleChange(event);
    }

    handleSubmit(event) {
        this.props.onSubmitForm(event);
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter new task here" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </Container>
        )
    }
}