export function getTasks() {
    const savedData = localStorage.getItem('tasklist');
    return JSON.parse(savedData).tasks;
}