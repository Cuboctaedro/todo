import { Task } from "./task.interface";

export interface TasksTable {
    updateTasks(tasks: Array<Task>): void
    init(): void
}