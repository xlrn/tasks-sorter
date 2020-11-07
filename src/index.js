import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import AddBar from './addbar';

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

// FIX THIS SHIT -- I think it works now?
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

  deleteTask = (task, column) => {
    console.log(task);
    console.log(column);

    const columnOG = column.props.column;
    const taskIdsOG = Array.from(columnOG.taskIds);
    console.log(taskIdsOG);
    const removalIndex = taskIdsOG.findIndex((x) => x === task.props.task.id);
    console.log(removalIndex);
    taskIdsOG.splice(removalIndex, 1);
    console.log(taskIdsOG);

    const newColumn = column.props.column;
    newColumn.taskIds = taskIdsOG;

    // delete task from tasks
    const taskList = this.state.tasks;
    console.log(taskList);
    delete taskList[task.props.task.id];
    const newTaskList = taskList;
    console.log(newTaskList);

    var newState = {
      ...this.state,
      tasks: 
        newTaskList,
      columns: {
        ...this.state.columns, 
        [newColumn.id] : newColumn,},
      
    }

    console.log(newState.tasks);
    console.log(newState.columns[newColumn.id].taskIds);

    this.setState(newState);
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        } catch (e) {
          this.setState({[key]: value});
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
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
