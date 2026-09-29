<script>
	import { page } from '$app/state';

	let {
		title,
		description,
		type = 'website',
		image = '/og-image.png',
		imageAlt = 'Alfito Juanda — AI & Fullstack Web Engineer',
		publishedTime = null,
		tags = [],
		noindex = false,
		jsonLd = null
	} = $props();

	const siteName = 'Alfito Juanda';

	let origin = $derived(page.url.origin);
	let canonical = $derived(origin + page.url.pathname);
	let imageUrl = $derived(image.startsWith('http') ? image : origin + image);

	// Escape "<" so post content can never close the script tag early
	let jsonLdTag = $derived(
		jsonLd
			? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` +
					'script>'
			: ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}

	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="id_ID" />
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#each tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdTag}
</svelte:head>
