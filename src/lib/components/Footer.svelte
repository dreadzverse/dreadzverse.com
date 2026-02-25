<script lang="ts">
	import { Copyright } from '@lucide/svelte';

	import { username, currentYear } from '$lib/configs';
</script>

<footer class="flex h-16 items-center justify-center gap-2">
	<Copyright size={12} strokeWidth={3} />
	<p class="leading-none font-medium">{currentYear} {username}. All rights reserved.</p>
</footer>
