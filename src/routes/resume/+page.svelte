<script>
	import cv from '$data/cv.json';
</script>

<svelte:head>
	<title>{cv.basics.name} - Resume</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 flex justify-center py-10 print:py-0 print:bg-white text-gray-900 selection:bg-blue-200">
	
	<!-- A4 Paper Container -->
	<div class="bg-white w-full max-w-[850px] shadow-xl print:shadow-none print:max-w-full print:w-full sm:rounded-lg print:rounded-none px-12 py-14 box-border relative overflow-hidden">
		
		<!-- Print button (hidden when printing) -->
		<div class="absolute top-6 right-6 print:hidden">
			<button onclick="window.print()" class="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-sm">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
				Print / Save PDF
			</button>
		</div>

		<!-- Header: Name and Label -->
		<header class="mb-10 text-center sm:text-left border-b-2 border-gray-900 pb-6">
			<h1 class="text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">{cv.basics.name}</h1>
			<p class="text-xl font-semibold text-gray-600">{cv.basics.label}</p>
		</header>

		<!-- Main Two-Column Layout -->
		<div class="flex flex-col sm:flex-row gap-12">
			
			<!-- Left Column (Main content) -->
			<div class="flex-1 flex flex-col gap-8">
				
				<!-- TENTANG SAYA -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-gray-900 tracking-wide">TENTANG SAYA</h2>
					<p class="text-sm leading-relaxed text-gray-800 font-medium">
						{cv.basics.summary}
					</p>
				</section>

				<!-- KEAHLIAN TEKNIS -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-gray-900 tracking-wide">KEAHLIAN TEKNIS</h2>
					<div class="flex flex-col gap-3">
						{#each cv.skillsByCategory as cat}
						<div class="text-sm text-gray-800">
							<span class="font-bold">{cat.category}:</span> {cat.skills.join(', ')}.
						</div>
						{/each}
					</div>
				</section>

				<!-- PROYEK SAYA -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-gray-900 tracking-wide">PROYEK SAYA</h2>
					<div class="flex flex-col gap-5">
						{#each cv.projects as project}
						<div class="text-sm text-gray-800">
							<h3 class="font-bold text-base mb-1">
								{project.name}
								{#if project.url && project.name !== 'Sistem Pendeteksi Suku dari Wajah'}
								- <a href="{project.url.startsWith('http') ? project.url : 'https://' + project.url}" target="_blank" class="text-blue-600 hover:underline font-normal text-xs">{project.url.replace('https://', '')}</a>
								{/if}
							</h3>
							
							<div class="font-semibold text-gray-700 mb-1">Teknologi: {project.stack}.</div>
							
							<p class="leading-relaxed">
								{project.summary}
								{#if project.name === 'Sistem Pendeteksi Suku dari Wajah' && project.url}
								<br><a href="{project.url}" target="_blank" class="text-blue-600 hover:underline font-medium mt-1 inline-block">Lihat Jurnal Publikasi &rarr;</a>
								{/if}
							</p>
							
							{#if project.highlights && project.highlights.length > 0}
							<ul class="list-disc ml-5 mt-1">
								{#each project.highlights as highlight}
								<li>{highlight}</li>
								{/each}
							</ul>
							{/if}
						</div>
						{/each}
					</div>
				</section>

			</div>

			<!-- Right Column (Sidebar details) -->
			<div class="w-full sm:w-[260px] flex flex-col gap-8 shrink-0">
				
				<!-- CONTACTS -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-gray-900 tracking-wide">CONTACTS</h2>
					<ul class="flex flex-col gap-2 text-sm text-gray-800 font-medium">
						{#if cv.basics.phone}
						<li class="flex items-center gap-2">
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
							{cv.basics.phone}
						</li>
						{/if}
						<li class="flex items-center gap-2">
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
							<a href="mailto:{cv.basics.email}" class="hover:underline">{cv.basics.email}</a>
						</li>
						{#if cv.basics.location.address}
						<li class="flex items-center gap-2">
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
							{cv.basics.location.address}
						</li>
						{/if}
						
						{#each cv.socials as social}
						<li class="flex items-center gap-2">
							{#if social.network.toLowerCase() === 'linkedin'}
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
							{:else if social.network.toLowerCase() === 'github'}
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
							{:else}
							<svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" /></svg>
							{/if}
							<a href="{social.url}" target="_blank" class="hover:underline">{social.url.replace('https://', '')}</a>
						</li>
						{/each}
					</ul>
				</section>

				<!-- PENDIDIKAN -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-gray-900 tracking-wide">PENDIDIKAN</h2>
					<div class="flex flex-col gap-4">
						{#each cv.education as edu}
						<div class="text-sm">
							<div class="font-bold text-gray-900">{edu.startDate} - {edu.endDate}</div>
							<div class="font-bold uppercase text-gray-800">{edu.institution}</div>
							<div class="text-gray-700">{edu.studyType}</div>
						</div>
						{/each}
					</div>
				</section>

				<!-- PRESTASI -->
				<section>
					<h2 class="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-gray-900 tracking-wide">PRESTASI</h2>
					<div class="flex flex-col gap-3">
						{#each cv.achievements as ach}
						<div class="text-sm">
							<div class="font-bold text-gray-900">{ach.date}</div>
							<div class="text-gray-800">{ach.title}</div>
						</div>
						{/each}
					</div>
				</section>

			</div>
		</div>

	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
	
	:global(body) {
		margin: 0;
	}
	
	/* Apply modern sans-serif font specifically for the resume */
	div {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}

	@media print {
		@page {
			margin: 0.5cm;
			size: A4;
		}
		
		:global(body) {
			background: white;
		}
	}
</style>
