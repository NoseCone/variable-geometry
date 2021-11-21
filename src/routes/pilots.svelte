<script context="module">
	export const prerender = true;
</script>

<script>
	import CompHeader from '$lib/CompHeader.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CompTabs from '$lib/CompTabs.svelte';
	import CompPilots from '$lib/CompPilots.svelte';
</script>

<section>
	<div class="container is-size-7">
		<div>
			<div class="spacer" />
			<CompHeader />
			<div class="spacer" />
			<Breadcrumb />
			<CompTabs />
			<CompPilots />
		</div>
		<div class="spacer" />
	</div>
</section>