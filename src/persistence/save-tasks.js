export function saveTasks(dummyTasks) {
    localStorage.setItem('tasklist', JSON.stringify({
        tasks: dummyTasks,
    }));
}