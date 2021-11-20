<script context="module">
	import { comp } from '../store.js';

	export const prerender = true;
</script>

<nav class="breadcrumb">
	<ul>
		<li><a href="http://flaretiming.com">Flare Timing</a></li>
		<li class="is-active"><a href="#">{$comp.compName}</a></li>
	</ul>
</nav>
