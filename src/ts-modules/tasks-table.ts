import { Task } from "../interfaces/task.interface";
import { TasksTable } from "../interfaces/tasks-table.interface";

export class TasksTableImpl implements TasksTable {
    private readonly table: HTMLTableElement;

    constructor() {
        this.table = document.getElementById('tasks-table') as HTMLTableElement;
    }

    private createCompletedTag(isComplete: boolean) {
        if (isComplete) {
            return '<span class="tag is-success">YES</span>';
        }
        return '<span class="tag is-danger">NO</span>';
    }

    private createTableRow(task: Task) {
        return `
        <tr>
            <td>
                ${task.description}
            </td>
            <td>
                ${task.difficulty}
            </td>
            <td>
                ${task.time}
            </td>
            <td>
                ${this.createCompletedTag(task.isCompleted)}
            </td>
        </tr>
        `;
    }

    updateTasks(tasks: Array<Task>): void {
        const tbody = this.table.querySelector('tbody') as HTMLTableSectionElement;
        tasks.forEach((task) => {
            const row = this.createTableRow(task);
            tbody.insertAdjacentHTML('beforeend', row);
        });
    }

    init(): void {
        console.log('started');
    }
}