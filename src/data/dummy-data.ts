import { Task } from "../interfaces/task.interface";

export const dummyTasks: Array<Omit<Task, 'markComplete'>> = [
    {
        id: '1',
        description: 'Learn JavaScript',
        time: 50,
        isCompleted: false,
        difficulty: 7,
    },
    {
        id: '2',
        description: 'Learn Html',
        time: 30,
        isCompleted: false,
        difficulty: 3,
    },
    {
        id: '3',
        description: 'Learn CSS',
        time: 50,
        isCompleted: false,
        difficulty: 6,
    },
    {
        id: '4',
        description: 'Clean house',
        time: 4,
        isCompleted: true,
        difficulty: 3,
    },
    {
        id: '5',
        description: 'Cook dinner',
        time: 2,
        isCompleted: false,
        difficulty: 4,
    },
    {
        id: '6',
        description: 'Go shopping',
        time: 3,
        isCompleted: false,
        difficulty: 2,
    },
];