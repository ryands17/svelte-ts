<script lang="ts">
  import { onMount } from 'svelte/internal'
  import Header from './components/Header.svelte'
  import Tasks from './components/Tasks.svelte'
  import Footer from './components/Footer.svelte'
  import { onRouteChange, home } from './config/routing'

  $: onRouteChange()

  onMount(() => {
    home()
  })
</script>

<style>
  :global(.toggle-all) {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(code) {
    font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
  }
</style>

<div class="todoapp">
  <Header />
  <Tasks />
  <Footer />
</div>
