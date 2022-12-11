import { createTableRow } from './views/table-row';
import { dummyTasks } from './data/dummy-data';




function markCompleted(description) {
    const task = tasks.find((item) => {
        return item.description === description;
    });
    if (task) {
        if (task.completed === false) {
            task.completed = true;
            console.log(`Task ${task.description} is completed.`);
        } else {
            console.log(`Task ${task.description} is already completed.`);
        }
    } else {
        console.log(`Task ${description} does not exist.`);
    }
}

function changeDifficulty(description, difficulty) {
    const task = tasks.find((item) => {
        return item.description === description;
    });
    if (task) {
        task.difficulty = difficulty;
    } else {
        console.log(`Task ${description} does not exist.`);
    }
}

function deleteTask(description) {
    const taskIndex = tasks.findIndex((item) => {
        return item.description === description;
    });

    if (taskIndex !== -1) {
        if (tasks[taskIndex].completed === true) {
            tasks.splice(taskIndex, 1);
            console.log(`Task ${description} has been deleted.`);
        } else {
            console.log(`Task ${description} is not completed and can not be deleted.`);
        }
    } else {
        console.log(`Task ${description} does not exist.`);
    }
}

function Task(description, time, difficulty) {
    this.description = description;
    this.difficulty = difficulty;
    this.time = time;
    this.id = 1;
    this.completed = false;
}

function addTask(description, time, difficulty) {
    const task = new Task(description, time, difficulty);
    tasks.push(task);
    console.log(`Task ${task.description} has been added to the list.`)
}

function updateTable(taskList) {
    const table = document.getElementById('tasks-table');

    const tbody = table.querySelector('tbody');

    taskList.forEach((task) => {
        const taskRow = createTableRow(task);
        tbody.insertAdjacentHTML('beforeend', taskRow);
    });
}

const tasks = getTasks();

updateTable(tasks);
