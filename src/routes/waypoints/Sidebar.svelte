<script>
  export let selectedWaypoint;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function completeTask() {
    dispatch('complete', { detail: selectedWaypoint.id });
  }
</script>

<div>
  {#if selectedWaypoint}
    <p>{selectedWaypoint.name}: {selectedWaypoint.task}</p>
    <button on:click={completeTask}>Complete Task</button>
  {/if}
</div>