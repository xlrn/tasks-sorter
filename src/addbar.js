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
        this.props.onInputChange(event.target.value);
    }

    handleSubmit(event) {
        this.props.onSubmitForm(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <form>
                    <label>
                        New Task:
                        <input type="text" value={this.props.value} /*onChange={this.handleChange}*/ />
                    </label>
                    <input type="submit" value="Add"/>
                </form>
            </Container>
        )
    }
}