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

export default initialData;