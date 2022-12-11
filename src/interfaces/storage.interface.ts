import { Task } from "./task.interface";

export interface Storage {
    addTask(newTask: Task): boolean
    deleteTask(taskID: string): boolean
    getTasks(): Array<Task>
}