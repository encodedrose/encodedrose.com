<script>
	import { blogPosts } from "$lib/data/posts";

	let links = [
		{
			url: 'https://newsletter.glenrosegroup.com/p/optimizing-natgw-costs-by-ninety-percent',
			text: 'Optimizing NATGW Costs by 90%',
		},
		{
			url: 'https://newsletter.glenrosegroup.com/p/large-cloud-zombie-resource-tax',
			text: 'The large cloud zombie resource tax',
		},
		{
			url: 'https://newsletter.glenrosegroup.com/p/shifting-left-on-costs-with-infracost',
			text: 'Shifting left on costs with Infracost'
		},
		{
			url: 'https://newsletter.glenrosegroup.com/p/finops-the-cloud-cost-management-solution',
			text: 'FinOps: the Cloud Cost Management Solution'
		},
		{
			url: 'https://newsletter.glenrosegroup.com/p/highlights-state-kubernetes-cost-optimization-report',
			text: 'Highlights of State of Kubernetes Cost Optimization Report - Part 1'
		},
		{
			url: 'https://newsletter.glenrosegroup.com/p/highlights-state-kubernetes-cost-optimization-report-part-2',
			text: 'Highlights of State of Kubernetes Cost Optimization Report - Part 2'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="Writings">
		<h1>Logs</h1>
		<h2>

		</h2>

		<h1>My Writing</h1>
		<h2>
			<ul>
				{#each links as link (link.url)}
					<li>
						<a href="{link.url}">{link.text}</a>
					</li>
				{/each}
			</ul>
		</h2>
	</div>
</section>

<style>
h1 {
	font-size: 2em;
}
</style>
