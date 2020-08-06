<script>
  import cx from 'classnames'
  import { tasks, misc } from '../config/tasks'
  import { currentRoute } from '../config/routing'

  $: remaining = $tasks.filter(t => !t.completed).length
</script>

<footer class="footer">
  <span class="todo-count">
    <strong>{remaining}</strong>
    {remaining === 1 ? 'item' : 'items'} left
  </span>
  <ul class="filters">
    <li>
      <a href="#/all" class={cx({ selected: $currentRoute === '/all' })}>All</a>
    </li>
    <li>
      <a href="#/active" class={cx({ selected: $currentRoute === '/active' })}>
        Active
      </a>
    </li>
    <li>
      <a
        href="#/completed"
        class={cx({ selected: $currentRoute === '/completed' })}>
        Completed
      </a>
    </li>
  </ul>
  <button class="clear-completed" on:click={misc.clearCompleted}>
    Clear Completed
  </button>
</footer>
