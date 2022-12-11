import { Task } from "../interfaces/task.interface";

interface CreateFromFormProps {
    description: string
    time: number
    difficulty: number
}

export class TaskImpl implements Task {
    readonly id: string;
    readonly time: number;
    readonly difficulty: number;
    readonly description: string;
    private completed: boolean;

    constructor(stored: Omit<Task, 'markComplete'>) {
        this.description = stored.description;
        this.difficulty = stored.difficulty;
        this.time = stored.time;
        this.id = stored.id;
        this.completed = stored.isCompleted;
    }

    static createFromForm(formData: CreateFromFormProps) {
        if (formData.difficulty < 1 || formData.difficulty > 10) {
            console.log('Difficulty must be between 1 and 10');
        }
        if (formData.time < 1) {
            console.log('Time must be more than 1');
        }
        return new this({
            ...formData,
            id: Math.floor(Math.random() * 100_000).toString(),
            isCompleted: false,
        });
    }

    get isCompleted() {
        return this.completed;
    }

    markComplete(): void {
        this.completed = true;
    }
}