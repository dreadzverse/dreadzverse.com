<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header class="flex justify-between p-8">
	<a href={resolve('/')} class="text-xl font-bold">Dreadz</a>
	<nav>
		<ul>
			<li>
				<a href={resolve('/blog')}>Blog</a>
			</li>
		</ul>
	</nav>
</header>
