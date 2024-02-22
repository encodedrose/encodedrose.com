<script>
  import { onMount } from 'svelte';
  import Sidebar from './Sidebar.svelte';

  let gameContainer;
  let selectedWaypoint = null;
  let debug = true; // Set to true to enable debug mode, false to disable
  let mousePosition = { x: 0, y: 0 };
  let waypoints = [
    { id: 1, name: 'Alpha', x: 500, y: 500, task: 'Find the hidden 🚀', emoji: '🚀', revealed: true, completed: false },
    { id: 2, name: 'Bravo', x: 1000, y: 500, task: 'Unlock the secret 🔑', emoji: '🔑', revealed: false, completed: false },
    // Add more waypoints as per your game design
  ];

  onMount(() => {
    expandGameArea();
    if (debug) {
      gameContainer.addEventListener('mousemove', updateMousePosition);
    }
  });

  function updateMousePosition(event) {
    const rect = gameContainer.getBoundingClientRect();
    mousePosition.x = Math.floor(event.clientX - rect.left); // Mouse X position within the gameContainer
    mousePosition.y = Math.floor(event.clientY - rect.top); // Mouse Y position within the gameContainer
  }

  function revealNextWaypoint(currentId) {
    const currentIndex = waypoints.findIndex(wp => wp.id === currentId);
    if (currentIndex + 1 < waypoints.length) {
      waypoints[currentIndex + 1].revealed = true;
    }
  }

  function selectWaypoint(waypoint) {
    selectedWaypoint = waypoint;
    revealNextWaypoint(waypoint.id);
  }

  function completeWaypoint(id) {
    waypoints = waypoints.map(wp => {
      if (wp.id === id) {
        return { ...wp, completed: true };
      }
      return wp;
    });
    selectedWaypoint = null; // Reset selection
  }

  function expandGameArea() {
    gameContainer.style.width = '400vw';
    gameContainer.style.height = '400vh';
  }
</script>

<style>
    .game-container {
        width: 100vw;
        height: 100vh;
        background-color: black;
        overflow: auto;
        position: relative;
    }
    .waypoint {
        width: 30px;
        height: 30px;
        position: absolute;
        cursor: pointer;
    }
    .debug-info {
        color: white;
        /*position: fixed;*/
        top: 0;
        left: 0;
    }
</style>

<div bind:this={gameContainer} class="game-container" on:mousemove={debug ? updateMousePosition : null}>
  {#each waypoints as waypoint (waypoint.id)}
    {#if waypoint.revealed}
      <div class="waypoint" style="left: {waypoint.x}px; top: {waypoint.y}px;" on:click={() => selectWaypoint(waypoint)}>
        <span>{waypoint.emoji}</span>
      </div>
    {/if}
  {/each}
  <!--{#if debug}-->
  <div class="debug-info">Mouse Position: {mousePosition.x}, {mousePosition.y}</div>
  <!--{/if}-->
</div>

<Sidebar {selectedWaypoint} on:complete={event => completeWaypoint(event.detail)} />