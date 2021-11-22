<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { compUrl, tasksWithZones, tasks, taskLengths } from '../store.js';

	onMount(async () => {
		fetch($compUrl + '/task-length/task-lengths.json')
			.then(response => response.json())
			.then(data => taskLengths.set(data))
			.catch((error) => {
				console.log(error);
				return [];
			});
		fetch($compUrl + '/comp-input/tasks.json')
			.then(response => response.json())
			.then(data => tasks.set(data))
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<table class="table is-striped">
	<thead>
		<tr>
			<th>#</th>
			<th class="th-task-name">Name</th>
			<th class="th-task-tps">Turnpoints</th>
			<th class="th-task-dist">Distance</th>
			<th class="th-task-stopped">Stopped</th>
			<th class="th-task-cancelled">Cancelled</th>
		</tr>
	</thead>
	<tbody>
		{#each $tasksWithZones as task, i}
		<tr>
			<td>{i + 1}</td>
			<td class="td-task-name">{task.taskName}</td>
			<td class="td-task-tps">{task.zoneNames}</td >
			<td class="td-task-dist">{task.distance}</td>
			<td class="td-task-stopped">{task.stopped}</td>
			<td class="td-task-cancelled">{task.cancelled}</td>
		</tr>
		{/each}
	</tbody>
</table>
