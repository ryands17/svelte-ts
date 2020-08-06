<script lang="ts">
  import { addTask } from '../config/tasks'
  import { ENTER } from '../config/constants'
  let text = ''

  const submit = () => {
    addTask(text)
    text = ''
  }
</script>

<style>
  h1 {
    text-transform: uppercase;
  }
</style>

<header class="header">
  <h1>tasks</h1>
  <input
    type="text"
    placeholder="What needs to be done?"
    class="new-todo"
    bind:value={text}
    on:keyup={e => e.key === ENTER && submit()} />
</header>
