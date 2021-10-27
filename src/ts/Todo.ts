class Todo {

  private key: number;
  private todo: string;
  private isCompleted: boolean;

  constructor(todo, isCompleted, key?) {
    this.todo = todo
    this.isCompleted = isCompleted
    this.key = key || new Date().getTime()
  }

  setIsCompleted(completed) {
    this.isCompleted = completed
  }

  getIsCompleted(): boolean {
    return this.isCompleted
  }

  getTodo(): string {
    return this.todo
  }

  getKey(): number {
    return this.key
  }

  toString(): string {
    return JSON.stringify(this)
  }
}

export default Todo