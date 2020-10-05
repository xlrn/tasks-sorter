import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import AddBar from './addbar';

class App extends React.Component {
  //state = initialData;

  constructor(props) {
    super(props);
    this.state = {
      iteration: 0,
      value: {},
      tasks: {        
      'task-1': { id: 'task-1', content: 'do something' },
      'task-2': { id: 'task-2', content: 'do nothing'},
      'task-3': { id: 'task-3', content: 'just do it'},
      },
      columns: {
        'column-1': {
            id: 'column-1',
            title: 'to do',
            taskIds: ['task-1', 'task-2'],
        },
        'column-2' : {
            id: 'column-2',
            title: 'not do',
            taskIds: ['task-3'],
        },
        'column-3' : {
            id: 'column-3',
            title: 'not important',
            taskIds: [],
        },
        'column-4' : {
            id: 'column-4',
            title: 'important',
            taskIds: [],
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    };
  }

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

    // figure out some elegant solution to this
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

  handleChange = (input) => {
    var newState = {
      value: input.target.value,
    }

    this.setState(newState);
  } 

// FIX THIS SHIT
  addTask = (task) => {
    const newId = Date.now().toString();
    const newContent = this.state.value;
    const column = this.state.columns["column-1"];
    const newTaskIds = Array.from(column.taskIds);
    console.log(newContent);

    var newTask = {id: newId, content: newContent}

    newTaskIds.push(newId);
    console.log(newTaskIds);

    var newColumn = {...column,
      taskIds: newTaskIds,
    }
    
    console.log(newColumn);
    console.log(newColumn.taskIds);

    var newState = {
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [newId] : newTask},
      columns: {
        ...this.state.columns, 
        [newColumn.id] : newColumn,},
      
    }
    console.log(newState.tasks);
    console.log(newState.columns);
    console.log(newState.columns[newColumn.id].taskIds);



    this.setState(newState);
    task.preventDefault();
  }

  deleteTask(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <AddBar onSubmitForm={this.addTask} onHandleChange={this.handleChange}/>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key = {column.id} column={column} tasks={tasks} deleteTask={this.deleteTask}/>;
        })}
        </DragDropContext>
      </div>
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
