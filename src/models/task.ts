import { Task } from "../interfaces/task.interface";

export class TaskImpl implements Task {
    readonly id: string;
    readonly time: number;
    readonly difficulty: number;
    readonly description: string;
    private completed: boolean;

    constructor(description: string, difficulty: number, time: number) {
        if (difficulty < 1 || difficulty > 10) {
            console.log('Difficulty must be between 1 and 10');
        }
        if (time < 1) {
            console.log('Time must be more than 1');
        }
        this.description = description;
        this.difficulty = difficulty;
        this.time = time;
        this.id = Math.floor(Math.random() * 100_000).toString();
        this.completed = false;
    }

    get isCompleted() {
        return this.completed;
    }

    markComplete(): void {
        this.completed = true;
    }
}