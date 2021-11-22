<script>
	import { compPrefix } from '../store';
</script>

<div id="content" class="content">
	<div class="tile is-ancestor">
		<div class="tile is-parent">
			<article class="tile is-child notification is-light">
				<p class="title">Variable Geometry</p>
				<p class="subtitle">
					Comp scored with <a href="https://flaretiming.com">Flare Timing</a> and presented with
					<a href="https://svelte.dev/">Svelte</a>
				</p>
			</article>
		</div>
	</div>
	<p>
		Want <a href="https://flaretiming.com/posts/2018-12-19-add-a-comp.html">your comp here</a>?
	</p>
	<div class="tile is-ancestor">
		<div class="tile is-vertical is-5">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<div class="tile is-child box">
						<h3>Paragliding</h3>
						<p />
						<ul>
							<li>
								Italian Open
								<a href="/comp" on:click={() => ($compPrefix = '2020-italy-open')}>2020</a>
							</li>
							<li>
								Dalmatian
								<a href="/comp" on:click={() => ($compPrefix = '2019-dalmatian')}>2019</a>
								<a href="/comp" on:click={() => ($compPrefix = '2018-dalmatian')}>2018</a>
							</li>
							<ul>
								<p />
							</ul>
						</ul>
					</div>
					<div class="tile is-child box">
						<h3>Comp Archetypes</h3>
						<p />
						<ul>
							<li>
								<a href="/comp" on:click={() => ($compPrefix = '1976-never-land')}
									>1976 Never Land</a
								>
							</li>
							<li>
								<a href="/comp" on:click={() => ($compPrefix = '1989-lift-lines')}
									>1989 Lift Lines</a
								>
							</li>
							<ul>
								<p />
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="tile is-vertical is-7">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<div class="tile is-child box">
						<h3>Hang Gliding</h3>
						<h5>Oceania</h5>
						<ul>
							<li>
								Forbes Flatlands
								<a href="/comp" on:click={() => ($compPrefix = '2018-forbes')}>2018</a>
								<a href="/comp" on:click={() => ($compPrefix = '2017-forbes')}>2017</a>
								<a href="/comp" on:click={() => ($compPrefix = '2016-forbes')}>2016</a>
								<a href="/comp" on:click={() => ($compPrefix = '2015-forbes')}>2015</a>
								<a href="/comp" on:click={() => ($compPrefix = '2014-forbes')}>2014</a>
								<a href="/comp" on:click={() => ($compPrefix = '2012-forbes')}>2012</a>
							</li>
							<li>
								Dalby Big Air <a href="/comp" on:click={() => ($compPrefix = '2017-dalby')}>2017</a>
							</li>
						</ul>
						<h5>Europe</h5>
						<ul>
							<li>
								Meduno
								<a href="/comp" on:click={() => ($compPrefix = '2020-meduno')}>2020</a>
							</li>
							<li>
								Tolmezzo
								<a href="/comp" on:click={() => ($compPrefix = '2019-italy')}>2019</a>
							</li>
						</ul>
						<h5>Americas</h5>
						<ul>
							<li>
								Green Swamp Klassic 2016
								<a href="/comp" on:click={() => ($compPrefix = '2016-greenswamp')}>Topless</a>
								<a href="/comp" on:click={() => ($compPrefix = '2016-greenswamp-sport')}
									>Kingposted</a
								>
							</li>
							<li>
								Big Spring
								<a href="/comp" on:click={() => ($compPrefix = '2016-big-spring')}>2016</a>
							</li>
							<li>
								QuestAir Open
								<a href="/comp" on:click={() => ($compPrefix = '2016-quest')}>2016</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
