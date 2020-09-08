const initialData = {
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
    },
    columnOrder: ['column-1', 'column-2'],
};

export default initialData;