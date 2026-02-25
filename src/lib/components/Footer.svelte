<script lang="ts">
	import { Copyright } from '@lucide/svelte';

	const username: string = 'dreadzverse';
	const currentYear: number = new Date().getFullYear();
</script>

<footer class="flex h-8 items-baseline justify-center gap-2">
	<Copyright size={12} strokeWidth={3} />
	<p class="leading-none font-medium">{currentYear} {username}. All rights reserved.</p>
</footer>
