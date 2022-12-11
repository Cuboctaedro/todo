import { Task } from "./task.interface";

export interface TasksTable {
    table: HTMLTableElement;
    updateTasks(tasks: Array<Task>): void
}