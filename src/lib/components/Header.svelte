<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	import { name, navbarLinks } from '$lib/configs';
</script>

<header class="flex justify-between p-8">
	<a href={resolve('/')} class="text-xl font-bold">{name}</a>
	<nav>
		<ul>
			{#each navbarLinks as link, i (i)}
				<li>
					<a
						href={resolve(link.path)}
						class="transition-all duration-300 hover:scale-110 hover:text-sky-600"
						class:text-sky-600={link.path === '/'
							? page.url.pathname === '/'
							: page.url.pathname.startsWith(link.path)}>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
