import Todo from "./Todo"

class Store {

  private static prefix: string = "todo-"

  static save(todo: Todo): void {
    localStorage.setItem(this.prefix + todo.getKey(), todo.toString())
  }

  static remove(key) {
    localStorage.removeItem(this.prefix + key)
  }

  static clear(): void {
    localStorage.clear()
  }

  static getAll(): Array<IStorageTodo> {
    const items = Array<IStorageTodo>();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if(!key.includes(this.prefix)) return;
      items.push({key: key, value: localStorage.getItem(key)})
    }
    console.log(items);
    
    return items.sort((a,b)=>(a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0))
  }

  public static generateUUID(): number {
    return new Date().getTime()
  }

  public static getPrefix(): string {
    return this.prefix
  }
}

export default Store