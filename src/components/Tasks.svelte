<script>
  import cx from 'classnames'
  import {
    tasks,
    toggleTask,
    removeTask,
    editTask,
    misc
  } from '../config/tasks'
  import { currentRoute } from '../config/routing'
  import { ESCAPE_KEY, ENTER_KEY } from '../config/constants'

  let editId = ''
  let editText = ''

  $: isEditing = Boolean(editId)
  $: list = $tasks.filter(task => {
    if ($currentRoute === '/completed') {
      return task.completed
    }
    if ($currentRoute === '/active') {
      return !task.completed
    }
    return true
  })

  const submit = (id: string) => {
    if (editText.trim()) {
      editTask({ text: editText, id })
      editText = ''
      editId = ''
    }
  }

  const handleEdit = ({ text, id }: { text: string; id: string }) => {
    editText = text
    editId = id
  }

  const handleKeyUp = ({ which, id }: { which: number; id: string }) => {
    if (which === ESCAPE_KEY) {
      editText = ''
      editId = ''
    } else if (which === ENTER_KEY) {
      submit(id)
    }
  }
</script>

<section class="main">
  <input
    id="toggle-all"
    class="toggle-all"
    type="checkbox"
    on:change={misc.toggleAllTasks} />
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    {#each list as task (task.id)}
      <li
        class={cx({
          completed: task.completed,
          editing: editId === task.id && isEditing
        })}>
        <div class="view">
          <input
            type="checkbox"
            class="toggle"
            on:change={() => toggleTask(task.id)}
            checked={task.completed}
            readonly />
          <label
            for=""
            on:dblclick={() => handleEdit({ text: task.text, id: task.id })}>
            {task.text}
          </label>
          <button class="destroy" on:click={() => removeTask(task.id)} />
        </div>
        {#if editId}
          <input
            class="edit"
            bind:value={editText}
            on:blur={() => submit(task.id)}
            on:keyup={({ which }) => handleKeyUp({ which, id: task.id })} />
        {/if}

      </li>
    {/each}
  </ul>
</section>
