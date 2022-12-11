import { AppStorage } from './interfaces/storage.interface';
import { TasksTable } from './interfaces/tasks-table.interface';
import { AppStorageImpl } from './ts-modules/storage';
import { TasksTableImpl } from './ts-modules/tasks-table';

// function markCompleted(description) {
//     const task = tasks.find((item) => {
//         return item.description === description;
//     });
//     if (task) {
//         if (task.completed === false) {
//             task.completed = true;
//             console.log(`Task ${task.description} is completed.`);
//         } else {
//             console.log(`Task ${task.description} is already completed.`);
//         }
//     } else {
//         console.log(`Task ${description} does not exist.`);
//     }
// }

// function changeDifficulty(description, difficulty) {
//     const task = tasks.find((item) => {
//         return item.description === description;
//     });
//     if (task) {
//         task.difficulty = difficulty;
//     } else {
//         console.log(`Task ${description} does not exist.`);
//     }
// }

// function deleteTask(description) {
//     const taskIndex = tasks.findIndex((item) => {
//         return item.description === description;
//     });

//     if (taskIndex !== -1) {
//         if (tasks[taskIndex].completed === true) {
//             tasks.splice(taskIndex, 1);
//             console.log(`Task ${description} has been deleted.`);
//         } else {
//             console.log(`Task ${description} is not completed and can not be deleted.`);
//         }
//     } else {
//         console.log(`Task ${description} does not exist.`);
//     }
// }

const storage: AppStorage = new AppStorageImpl();

const table: TasksTable = new TasksTableImpl();

const initialData = storage.getTasks();

table.updateTasks(initialData);