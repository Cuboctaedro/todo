export function createCompletedTag(isComplete) {
    if (isComplete) {
        return '<span class="tag is-success">YES</span>';
    }
    return '<span class="tag is-danger">NO</span>';
}