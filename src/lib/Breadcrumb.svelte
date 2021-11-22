<script context="module">
	import { comp } from '../store.js';

	export const prerender = true;
</script>

<nav class="breadcrumb">
	<ul>
		<li><a href="/">Variable Geometry (Svelte)</a></li>
		<li class="is-active">{$comp.compName}</li>
	</ul>
</nav>
