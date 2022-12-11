import { Task } from "../interfaces/task.interface";
import { TasksTable } from "../interfaces/tasks-table.interface";

export class TasksTableImpl implements TasksTable {
    table: HTMLTableElement;

    constructor() {
        this.table = document.getElementById('tasks-table') as HTMLTableElement;
    }

    updateTasks(tasks: Array<Task>): void {
        throw new Error("Method not implemented.");
    }
    
}