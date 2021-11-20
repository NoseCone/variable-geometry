<script context="module">
	export const prerender = false;
</script>

<script>
	import { onMount } from 'svelte';
	import { comp, compSlug, nominals } from '../store.js';

	onMount(async () => {
		fetch('http://2017-dalby.flaretiming.com/json/comp-input/comps.json')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				comp.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
		fetch('http://2017-dalby.flaretiming.com/json/comp-input/nominals.json')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				nominals.set(data);
			})
			.catch((error) => {
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
