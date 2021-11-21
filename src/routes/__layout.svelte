<script>
	import '../site.css';
</script>

<header>
	<link href="/site.css" rel="stylesheet" />
</header>

<main>
	<div class="spacer"></div>
	<slot />
</main>

<footer class="footer">
	<div class="container">
		<div class="content">
			<div class="is-size-7">
				<strong title="app-view-0.29 2020-12-19T14:27">Flare Timing</strong> by
				<a href="http://www.blockscope.com" target="_blank">Block Scope</a><br />(<a
					href="http://www.flaretiming.com/about.html"
					target="_blank">About</a
				>, <a href="http://www.flaretiming.com/disclaim.html" target="_blank">Disclaimer</a>,
				<a href="http://www.flaretiming.com/blog.html" target="_blank">Blog</a>)<br /><br />Map data
				© <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors
			</div>
		</div>
	</div>
</footer>