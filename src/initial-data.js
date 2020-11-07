const initialData = { 
    iteration: 0,
    value: {},
    tasks: {},
    columns: {
    'column-1': {
        id: 'column-1',
        title: 'High Priority, Easy',
        taskIds: [],
    },
    'column-2' : {
        id: 'column-2',
        title: 'High Priority, Hard',
        taskIds: [],
    },
    'column-3' : {
        id: 'column-3',
        title: 'Low Priority, Easy',
        taskIds: [],
    },
    'column-4' : {
        id: 'column-4',
        title: 'Low Priority, Hard',
        taskIds: [],
    }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;