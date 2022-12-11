import { Task } from "./task.interface";

export interface AppStorage {
    addTask(newTask: Task): boolean
    deleteTask(taskID: string): boolean
    getTasks(): Array<Task>
}