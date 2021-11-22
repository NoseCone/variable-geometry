<script context="module">
	import { page } from '$app/stores';
	export const prerender = true;
</script>

<div class="tabs">
	<ul>
		<li class:is-active={$page.path === '/settings'}>
			<a sveltekit:prefetch href="/settings">Settings</a>
		</li>
		<li class:is-active={$page.path === '/comp'}>
			<a sveltekit:prefetch href="/comp">Tasks</a>
		</li>
		<li class:is-active={$page.path === '/pilots'}>
			<a sveltekit:prefetch href="/pilots">Pilots</a>
		</li>
	</ul>
</div>
