<script context="module">
	export const prerender = true;
</script>

<script>
	import CompHeader from './CompHeader.svelte';
	import CompTasks from './CompTasks.svelte';
	import CompTabs from './CompTabs.svelte';
	import Breadcrumb from './Breadcrumb.svelte';
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="container is-size-7">
		<div>
			<div class="spacer" />
			<CompHeader />
			<div class="spacer" />
			<Breadcrumb />
			<CompTabs />
			<CompTasks />
		</div>
		<div class="spacer" />
	</div>
</section>