import { findAllByTitle } from "@testing-library/react";

const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "do something" },
        "task-2": { id: "task-2", content: "do nothing"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "to do",
            taskIds: ["task-1", "task-2"],
        },
    },
    columnOrder: ["column-1"],
};

export default initialData;