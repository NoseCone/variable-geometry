<script context="module">
	export const prerender = false;
</script>

<script>
	import { onMount } from 'svelte';
	import { compUrl, comp, compSlug, nominals } from '../store.js';

	onMount(async () => {
		fetch($compUrl + '/comp-input/comps.json')
			.then(response => response.json())
			.then(data => comp.set(data))
			.catch(error => {
				console.log(error);
				return [];
			});
		fetch($compUrl + '/comp-input/nominals.json')
			.then(response => response.json())
			.then(data => nominals.set(data))
			.catch(error => {
				console.log(error);
				return [];
			});
	});
</script>

<div class="container">
	<div class="tile is-ancestor" style="flex-wrap: wrap;">
		<div class="tile">
			<div class="tile is-parent">
				<div class="tile is-child box">
					<p class="title is-3">{$comp.compName}</p>
					<p class="title is-5">{$compSlug}</p>
					<div class="example">
						<div class="field is-grouped is-grouped-multiline">
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">UTC offset</span>
									<span class="tag is-warning">{$comp.utcOffset.timeZoneMinutes}</span>
								</div>
							</div>
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">minimum distance</span>
									<span class="tag is-black">{$nominals.free}</span>
								</div>
							</div>
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">nominal distance</span>
									<span class="tag is-info">{$nominals.distance}</span>
								</div>
							</div>
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">nominal time</span>
									<span class="tag is-success">{$nominals.time}</span>
								</div>
							</div>
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">nominal goal</span>
									<span class="tag is-primary">{$nominals.goal}</span>
								</div>
							</div>
							<div class="control">
								<div class="tags has-addons">
									<span class="tag">score-back time</span>
									<span class="tag is-danger">{$comp.scoreBack}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
