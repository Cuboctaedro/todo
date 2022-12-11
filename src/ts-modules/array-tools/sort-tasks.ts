import { Task } from '../../interfaces/task.interface';

type TableKeyProperty = 'time' | 'difficulty' | 'description';

export function sortByProperty(list: Array<Task>, prop: TableKeyProperty) {
    const listCopy = list.slice();

    if (prop === 'time') {
        listCopy.sort((a, b) => {
            return a.time - b.time;
        });
    }
    
    else if (prop === 'difficulty') {
        listCopy.sort((a, b) => {
            return a.difficulty - b.difficulty;
        });
    }
    
    else {
        listCopy.sort((a, b) => {
            if (a.description > b.description) {
                return 10;
            } else if (a.description < b.description) {
                return -10;
            } else {
                return 0;
            }
        });
    }

    return listCopy;
}
