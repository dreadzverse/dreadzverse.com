<script lang="ts">
	import { Copyright } from '@lucide/svelte';

	import favicon from '$lib/assets/favicon.svg';

	import './layout.css';

	let { children } = $props();

	const username: string = 'dreadzverse';
	const currentYear: number = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Dreadz</title>
</svelte:head>

{@render children()}

<footer class="flex h-8 items-baseline justify-center gap-2">
	<Copyright size={12} strokeWidth={3} />
	<p class="leading-none font-medium">{currentYear} {username}. All rights reserved.</p>
</footer>
