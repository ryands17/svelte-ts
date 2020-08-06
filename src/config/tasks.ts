import { writable } from 'svelte/store'

type Task = {
  id: string
  text: string
  completed: boolean
}

type Tasks = Task[]

export const tasks = writable<Tasks>([
  { id: Math.random().toString(), text: 'Implement Svelte', completed: true },
  {
    id: Math.random().toString(),
    text: 'Implement Svelte with TypeScript',
    completed: false,
  },
])

export const addTask = (text: string) => {
  tasks.update(t => {
    t.push({
      id: Math.random().toString(),
      text,
      completed: false,
    })
    return t
  })
}

export const removeTask = (id: string) => {
  tasks.update(t => t.filter(task => task.id !== id))
}

export const toggleTask = (id: string) => {
  tasks.update(t => {
    const index = t.findIndex(task => task.id === id)
    if (index !== -1) {
      t[index].completed = !t[index].completed
    }
    return t
  })
}

export const editTask = ({ id, text }: { id: string; text: string }) => {
  tasks.update(t => {
    const index = t.findIndex(task => task.id === id)
    if (index !== -1) {
      t[index].text = text
    }
    return t
  })
}

export const misc = {
  clearCompleted() {
    tasks.update(t => t.filter(task => !task.completed))
  },
  toggleAllTasks() {
    tasks.update(t =>
      t.map(task => {
        task.completed = !task.completed
        return task
      })
    )
  },
}
