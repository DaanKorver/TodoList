import Todo from "./Todo"
import Store from "./Store"

class UI {

  private static list: Element = document.getElementById("todolist") 

  static init(): void {
    UI.addListeners()
    UI.getTodos()
  }

  static addItem(todo: Todo): void {
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.setAttribute('type','checkbox')
    const removeBtn = document.createElement("button")
    const todoText = document.createElement("p")
    todoText.innerText = todo.getTodo()
    removeBtn.innerHTML = "	&times;"
    removeBtn.addEventListener("click", ()=>{
      UI.removeItem(todo.getKey())
      Store.remove(todo.getKey())
    })
    li.classList.add(`${todo.getKey()}`)
    li.insertAdjacentElement("afterbegin", todoText)
    li.insertAdjacentElement("beforeend", removeBtn)
    UI.list.appendChild(li)
  }

  static removeItem(key: number): void { 
    document.getElementsByClassName(`${key}`)[0].remove()
  }

  private static addListeners(): void {
    const input = <HTMLInputElement>document.getElementById("input")
    input.addEventListener("keydown", (e)=>{
      if(e.key != "Enter" || input.value == "") return;
      const todo = new Todo(input.value, false)
      input.value = ""
      UI.addItem(todo)
      Store.save(todo)
    })
  }

  private static getTodos(): void {
    const items = Store.getAll()
    items.forEach(item=>{
      const parsed = JSON.parse(item.value)
      const key = item.key.split(Store.getPrefix()).pop()
      const todo = new Todo(parsed.todo, parsed.isCompleted, key)
      console.log(todo);
      this.addItem(todo)
    })
  }

}

export default UI