<script>
	let { data } = $props();
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { resolve } from '$app/paths';

	function formatDate(date) {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<Seo
	title="Blog — Alfito Juanda"
	description="Notes from Alfito Juanda on building AI, computer vision, and fullstack web projects."
	noindex={data.posts.length === 0}
/>

<section class="relative pt-24 pb-16 sm:py-32 px-4 sm:px-6 w-full min-h-screen bg-zinc-950">
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="mb-12 sm:mb-24">
			<SectionHeader title="Writing" subtitle="BLOG" />
			<p class="text-zinc-400 max-w-2xl mt-8 text-lg md:text-xl font-light leading-relaxed">
				Notes on building AI, computer vision, and fullstack web projects.
			</p>
		</div>

		{#if data.posts.length === 0}
			<div
				class="p-8 sm:p-12 border border-dashed border-zinc-800 rounded-2xl text-center flex flex-col items-center gap-6"
			>
				<p class="text-zinc-400 text-lg font-light">No posts yet — the first one is on its way.</p>
				<a
					href={resolve('/')}
					class="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest hover:text-zinc-400 transition-colors"
				>
					<span class="mr-2">←</span> Back to Home
				</a>
			</div>
		{/if}

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
			{#each data.posts as post (post.slug)}
				<div
					class="group relative flex flex-col justify-between h-full p-6 sm:p-8 border border-zinc-900 bg-zinc-900/30 hover:border-zinc-700 transition-colors duration-500 rounded-2xl backdrop-blur-sm"
				>
					<div>
						<div class="flex flex-col gap-3 mb-6">
							<span class="text-xs font-mono text-zinc-500 uppercase tracking-widest"
								>{formatDate(post.meta.date)}</span
							>
							<div class="flex flex-wrap gap-2">
								{#if post.meta.tags}
									{#each post.meta.tags as tag (tag)}
										<span
											class="text-[10px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-500 uppercase tracking-wider"
											>{tag}</span
										>
									{/each}
								{/if}
							</div>
						</div>

						<h2
							class="text-2xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors font-outfit"
						>
							<a href={resolve(`/blog/${post.slug}`)} class="before:absolute before:inset-0">
								{post.meta.title}
							</a>
						</h2>

						<p class="text-zinc-400 mb-8 line-clamp-3 font-light leading-relaxed">
							{post.meta.description}
						</p>
					</div>

					<div
						class="flex items-center text-sm font-bold text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300"
					>
						Read Article <span class="ml-2">→</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
