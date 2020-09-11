import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const {destination, source, draggableId} = result;
    var newState;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && destination.index === source.index
    ) { 
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index !== source.index) {
      const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1); // remove 1 item from this index
      newTaskIds.splice(destination.index, 0, draggableId); // remove 0 items from this index, insert draggableId

      const newColumn = {
        ...column,
        taskIds: newTaskIds
      };

      newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      }
    } else {
      const sourceColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const newTaskIdsSource = Array.from(sourceColumn.taskIds);
      const newTaskIdsDestination = Array.from(destColumn.taskIds);
      newTaskIdsSource.splice(source.index, 1); // remove 1 item from this index
      newTaskIdsDestination.splice(destination.index, 0, draggableId); // remove 0 items from this index, insert draggableId

      const newSourceColumn = {
        ...sourceColumn,
        taskIds: newTaskIdsSource
      };

      const newDestColumn = {
        ...destColumn,
        taskIds: newTaskIdsDestination
      }

      newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
      };
    }

    this.setState(newState);

  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

        return <Column key = {column.id} column={column} tasks={tasks}/>;
      })}
      </DragDropContext>
    );
  }  
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
