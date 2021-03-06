import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskLisk = styled.div`
    padding 8px;
    transition: background-color 0.2 ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

export default class Column extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(task) {
        this.props.deleteTask(task, this);
    }

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot)=> (
                    <TaskLisk ref={provided.innerRef} {...provided.droppableProps} 
                        isDraggingOver={snapshot.isDraggingOver}>
                            {this.props.tasks.map((task, index) => 
                                <Task key={task.id} task={task} index={index} deleteTask= {this.deleteTask}/>)}
                            {provided.placeholder}
                    </TaskLisk>
                    )}
                </Droppable>
            </Container>
        );
    }
}