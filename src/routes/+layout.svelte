<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
	}

	main {
		flex: 1;
		overflow: auto;
		padding: 1em;
		font-family: 'Comfortaa', serif;
		position: relative;
	}
</style>
