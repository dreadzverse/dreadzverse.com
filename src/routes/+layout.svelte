<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import './layout.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Dreadz</title>
</svelte:head>

<Header />

{@render children()}

<Footer />
