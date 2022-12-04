import { createCompletedTag } from './completed-tag';

export function createTableRow(task) {
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
            ${createCompletedTag(task.completed)}
        </td>
    </tr>
    `;
};
