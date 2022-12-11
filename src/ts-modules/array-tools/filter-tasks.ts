import { Task } from "../../interfaces/task.interface";

export function filterCompleted(list: Array<Task>, isComplete: boolean) {
    return list.filter((task) => {
        return task.isCompleted == isComplete;
    });
}