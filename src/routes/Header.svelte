<script>
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import hamster from '$lib/images/hamster.png'
</script>

<header>
	<div aria-label="Home Page of EncodedRose">
		<a href="/" title="Home">
			<img src="{hamster}" width="100%" height="100%" />
		</a>
	</div>
	<div class="divider"></div>
	<h2>About me</h2>
	<p class="center">👋 I'm Elizabeth</p>
	<p>Founder & Chief Cloud Scientist at the <a href="https://www.glenrosegroup.com/">Glenrose Group</a> where we help you run more software for less. I'm also Building celestial.cloud</p>
	<p><strong>Prior:</strong> <span class="underline">Head of Innovation & Technology</span> at New Relic with over a decade of software experience.</p>
	<h2>In Progress</h2>
	<p class="indent">When I'm not running the Glenrose Group, I'm working on a BSBA in Marketing and writing my first technical book.</p>
	<h2>Raison d'être</h2>
	<p class="indent">poke computers.</p>
	<h2>Connect</h2>
	<div class="social-icons">
		<a href="https://github.com/encodedrose">
			<SocialIcons alt="" network="github" width="24" height="24" />
		</a>
		<a href="https://www.linkedin.com/in/at-eflowers/">
			<SocialIcons alt="LinkedIn" network="linkedin" width="24" height="24" />
		</a>
		<a href="https://twitter.com/EncodedRose">
			<SocialIcons alt="Twitter" network="twitter" width="24" height="24" />
		</a>
		<a href="mailto:">
			<SocialIcons network="email" width="24" height="24"></SocialIcons>
		</a>
	</div>
</header>

<style>
	header {
		width: 20%;
		padding: 1em;
		line-height: 1.8em;
	}

	.underline {
		text-decoration: underline;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
		font-weight: 900;
	}

	h2 {
		font-weight: 900;
	}

	p, h1, h2 {
		font-family: 'Comfortaa';
	}

	h2, .social-icons {
		text-align: center;
	}

	p {
		font-weight: 400;
	}

	.divider {
		height: 1px;
		background-color: lightgrey;
		margin-top: .5em;
		margin-bottom: .5em;
	}

	.center {
		text-align: center;
	}

	.indent {
		text-indent: 2em;
	}

	.text-xs {
		font-size: 0.612em;
	}
</style>
