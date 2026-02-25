<script lang="ts">
	import { resolve } from '$app/paths';

	import { name, navbarLinks } from '$lib/configs';
</script>

<header class="flex justify-between p-8">
	<a href={resolve('/')} class="text-xl font-bold">{name}</a>
	<nav>
		<ul>
			{#each navbarLinks as link, i (i)}
				<li>
					<a href={resolve(link.path)}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
