<script context="module">
	export const prerender = true;
</script>

<script>
	import CompHeader from '$lib/CompHeader.svelte';
	import CompTasks from '$lib/CompTasks.svelte';
	import CompTabs from '$lib/CompTabs.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
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