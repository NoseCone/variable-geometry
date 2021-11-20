<script context="module">
	export const prerender = true;
</script>

<table class="table is-striped">
	<thead>
		<tr>
			<th colspan="6" />
			<th class="has-text-centered has-text-weight-bold is-light" colspan="6"
				>3-Way (Ft,Fs,As) Comparison</th
			>
		</tr>
		<tr>
			<th colspan="6" />
			<th class="has-text-centered is-light" colspan="2">Ft with Fs</th>
			<th class="has-text-centered" colspan="2">Ft with As</th>
			<th class="has-text-centered is-light" colspan="2">As with Fs</th>
		</tr>
		<tr>
			<th>#</th>
			<th class="th-task-name">Name</th><th class="th-task-tps">Turnpoints</th><th
				class="th-task-dist">Distance</th
			><th class="th-task-stopped">Stopped</th><th class="th-task-cancelled">Cancelled</th><th
				class="th-task-stats-mean">Δ Mean</th
			><th class="th-task-stats-stddev">± Std Dev</th><th class="th-task-stats-mean">Δ Mean</th><th
				class="th-task-stats-stddev">± Std Dev</th
			><th class="th-task-stats-mean">Δ Mean</th><th class="th-task-stats-stddev">± Std Dev</th></tr
		></thead
	><tbody
		><tr
			><td>1</td><td class="td-task-name">day one</td><td class="td-task-tps"
				><a>1DALBY-JANDOW-WARRA-1DALBY</a></td
			><td class="td-task-dist">99.561 km</td><td class="td-task-stopped" /><td
				class="td-task-cancelled"
			/><td class="td-task-stats-mean"><span class="has-text-danger">-39.5</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">140.8</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+52.8</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">233.9</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+17.2</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">233.6</span></td
			></tr
		><tr
			><td>2</td><td class="td-task-name">day four T2</td><td class="td-task-tps"
				><a>1DALBY-MACALI-JIMBOU-WARRA-JANDOW-BRIGAL</a></td
			><td class="td-task-dist">111.260 km</td><td class="td-task-stopped" /><td
				class="td-task-cancelled"
			/><td class="td-task-stats-mean"><span class="has-text-success">+0.3</span></td><td
				class="td-task-stats-stddev"><span class="has-text-success">1.8</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+66.0</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">191.5</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+30.4</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">191.9</span></td
			></tr
		><tr
			><td>3</td><td class="td-task-name">day five</td><td class="td-task-tps"
				><a>1DALBY-BRIGAL-IRON-1DALBY</a></td
			><td class="td-task-dist">96.889 km</td><td class="td-task-stopped" /><td
				class="td-task-cancelled"
			/><td class="td-task-stats-mean"><span class="has-text-success">-0.6</span></td><td
				class="td-task-stats-stddev"><span class="has-text-success">1.4</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+18.0</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">114.5</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+32.6</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">92.3</span></td
			></tr
		><tr
			><td>4</td><td class="td-task-name">day six</td><td class="td-task-tps"
				><a>1DALBY-WARRA-BELL-1DALBY</a></td
			><td class="td-task-dist">114.374 km</td><td class="td-task-stopped" /><td
				class="td-task-cancelled"
			/><td class="td-task-stats-mean"><span class="has-text-success">-0.1</span></td><td
				class="td-task-stats-stddev"><span class="has-text-success">0.3</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+23.1</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">103.4</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+22.0</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">103.7</span></td
			></tr
		><tr
			><td>5</td><td class="td-task-name">day seven</td><td class="td-task-tps"
				><a>1DALBY-BROADW-JIMBOU-MACALI-1DALBY</a></td
			><td class="td-task-dist">88.970 km</td><td class="td-task-stopped" /><td
				class="td-task-cancelled"
			/><td class="td-task-stats-mean"><span class="has-text-success">-0.3</span></td><td
				class="td-task-stats-stddev"><span class="has-text-success">0.8</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+73.4</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">222.4</span></td
			><td class="td-task-stats-mean"><span class="has-text-danger">+23.7</span></td><td
				class="td-task-stats-stddev"><span class="has-text-danger">212.8</span></td
			></tr
		></tbody
	><tfoot
		><tr
			><td colspan="14"
				>Δ The mean of the difference in total points awarded compared to the expected total points.</td
			></tr
		><tr><td colspan="14">± The standard deviation of the same.</td></tr><tr
			><td colspan="14"
				>Flare Timing (Ft), Flight System (Fs) and airScore (As) are compared pairwise in the
				difference of total points per pilot.</td
			></tr
		></tfoot
	>
</table>
