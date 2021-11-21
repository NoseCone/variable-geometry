<script context="module">
	export const prerender = true;
</script>

<script>
	import { comp } from '../store.js';
</script>

<table class="table is-bordered">
	<thead>
		<tr>
			<th colspan="3" />
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>* Give</th>
			<td colspan="2">give fraction only, no give distance</td>
			<td>{$comp.give.giveFraction}</td>
		</tr>
		<tr>
			<th>Earth model</th>
			<td colspan="2">Sphere with radius</td>
			<td>{$comp.earth.sphere.radius}</td>
		</tr>
		<tr>
			<th colspan="3">Earth math</th>
			<td>{$comp.earthMath}</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="4">
				{' '}
				* Adjusting the turnpoint radius with some give for pilots just short of the control zone
			</td>
		</tr>
	</tfoot>
</table>
