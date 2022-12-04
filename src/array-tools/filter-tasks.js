export function filterCompleted(list, isComplete) {
    return list.filter((task) => {
        return task.completed == isComplete;
    });
}