<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { pilotsStatus, tasks } from '../store.js';

	onMount(async () => {
		fetch('http://2017-dalby.flaretiming.com/json/gap-point/pilots-status.json')
			.then(response => response.json())
			.then(data => pilotsStatus.set(data))
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<table class="table is-bordered is-striped">
	<thead>
		<tr>
			<th class="th-pid">Id</th>
			<th>Name</th>
			{#each $tasks as task}
				<th>{task.taskName}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each $pilotsStatus as [[pid, pilotName], xs]}
			<tr>
				<td class="td-pid">{pid}</td>
				<td>{pilotName}</td>
				{#each xs as dayStatus}
					<td>{dayStatus === 'DF' ? '' : dayStatus}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
