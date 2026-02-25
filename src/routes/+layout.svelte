<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import './layout.css';

	import { name } from '$lib/configs';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{name}</title>
</svelte:head>

<Header />

<main class="grow overflow-x-hidden overflow-y-auto">
	{@render children()}
</main>

<Footer />
