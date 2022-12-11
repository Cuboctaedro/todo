import { AppStorage } from "../interfaces/storage.interface";
import { StoredTask, Task } from "../interfaces/task.interface";
import { dummyTasks } from "../data/dummy-data";
import { TaskImpl } from './task';

export class AppStorageImpl implements AppStorage {
    private storageKey = 'tasklist';

    private saveTasks(tasks: Array<Task>) {
        localStorage.setItem(this.storageKey, JSON.stringify({
            tasks: tasks,
        }));
    }

    getTasks(): Task[] {
        const savedData = localStorage.getItem(this.storageKey);
        if (savedData !== null) {
            try {
                const jsonData: { tasks: Array<StoredTask> } = JSON.parse(savedData);
                return jsonData.tasks.map((savedTask) => {
                    return new TaskImpl(savedTask);
                });
            } catch (err) {
                console.log(err.message);
            }
        }
        return dummyTasks.map((savedTask) => {
            return new TaskImpl(savedTask);
        });
    }

    addTask(newTask: Task): boolean {
        const storedTasks = this.getTasks();
        storedTasks.push(newTask);
        this.saveTasks(storedTasks);
        return true;
    }

    deleteTask(taskID: string): boolean {
        const storedTasks = this.getTasks();
        const taskIndex = storedTasks.findIndex((task) => (task.id === taskID));
        storedTasks.splice(taskIndex, 1);
        this.saveTasks(storedTasks);
        return true;
    }
}