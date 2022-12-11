export interface Task {
    readonly id: string
    readonly time: number
    readonly difficulty: number
    readonly description: string
    readonly isCompleted: boolean
    markComplete(): void
}

export type StoredTask = Omit<Task, 'markComplete'>;