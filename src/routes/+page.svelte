<script>
	import cvEn from '$data/cv_en.json';
	import cvId from '$data/cv_id.json';
	import { onMount } from 'svelte';

	let lang = $state('en');
	let cv = $derived(lang === 'en' ? cvEn : cvId);
	let basics = $derived(cv.basics);
	let skills = $derived(cv.skills);

	const t = $derived(
		lang === 'en'
			? {
					welcome: 'WELCOME TO',
					work: 'Open to work',
					viewWork: 'View My Work',
					getInTouch: 'Get In Touch',
					viewCv: 'View Interactive CV',
					myWork: 'MY WORK',
					otherCool: 'OTHER COOL STUFF',
					journey: 'JOURNEY & SKILLS',
					orgExp: 'Organization Experience',
					techArsenal: 'Technical Arsenal',
					visit: 'Visit',
					builtWith: 'Built with',
					threatFeed: 'THREAT FEED - SECURE',
					cloudDeploy: 'CLOUD DEPLOY',
					activities: 'Activities'
				}
			: {
					welcome: 'SELAMAT DATANG DI',
					work: 'Tersedia untuk bekerja',
					viewWork: 'Lihat Karya Saya',
					getInTouch: 'Hubungi Saya',
					viewCv: 'Lihat CV Interaktif',
					myWork: 'KARYA SAYA',
					otherCool: 'PROYEK LAINNYA',
					journey: 'PERJALANAN & KEAHLIAN',
					orgExp: 'Pengalaman Organisasi',
					techArsenal: 'Kemampuan Teknis',
					visit: 'Kunjungi',
					builtWith: 'Dibuat dengan',
					threatFeed: 'THREAT FEED - SECURE',
					cloudDeploy: 'CLOUD DEPLOY',
					activities: 'Aktivitas'
				}
	);

	let currentTime = $state(new Date());
	let showRomantic = $state(false);
	let flowers = $state([]);
	let fireworks = $state([]);
	let petals = $state([]);

	$effect(() => {
		if (showRomantic) {
			document.documentElement.style.overflow = 'hidden';
			document.documentElement.classList.add('no-scroll');
			document.body.style.overflow = 'hidden';
			document.body.classList.add('no-scroll');
		} else {
			document.documentElement.style.overflow = '';
			document.documentElement.classList.remove('no-scroll');
			document.body.style.overflow = '';
			document.body.classList.remove('no-scroll');
		}
	});

	function openRomantic() {
		showRomantic = true;
		spawnFlowers();
		spawnFireworks();
		spawnPetals();
	}

	function closeRomantic() {
		showRomantic = false;
		flowers = [];
		fireworks = [];
		petals = [];
	}

	function spawnFlowers() {
		const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌹', '💐', '🌷', '🪷', '🌸', '🌺', '🌸', '🌷'];
		const newFlowers = [];
		for (let i = 0; i < 50; i++) {
			// Alternate sway direction for natural zigzag look
			const swayDir = Math.random() > 0.5 ? 1 : -1;
			newFlowers.push({
				id: i,
				emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
				left: Math.random() * 105,
				delay: -(Math.random() * 8), // negative delay = pre-started = always visible
				duration: 4 + Math.random() * 6,
				size: 1 + Math.random() * 2.2,
				swayAmount: swayDir * (20 + Math.random() * 80)
			});
		}
		flowers = newFlowers;
	}

	function spawnFireworks() {
		const colors = ['#ff69b4', '#ff1493', '#ff6eb4', '#ffb6c1', '#ffd700', '#ff4500', '#ff8c00'];
		const newFw = [];
		for (let i = 0; i < 15; i++) {
			newFw.push({
				id: i,
				x: 10 + Math.random() * 80,
				y: 10 + Math.random() * 60,
				color: colors[Math.floor(Math.random() * colors.length)],
				delay: Math.random() * 3,
				size: 60 + Math.random() * 80
			});
		}
		fireworks = newFw;
	}

	function spawnPetals() {
		const newPetals = [];
		for (let i = 0; i < 40; i++) {
			newPetals.push({
				id: i,
				left: Math.random() * 105,
				delay: -(Math.random() * 8), // pre-start so petals are visible immediately
				duration: 3 + Math.random() * 5,
				rotate: Math.random() * 360
			});
		}
		petals = newPetals;
	}

	onMount(() => {
		const timer = setInterval(() => {
			currentTime = new Date();
		}, 1000);
		return () => clearInterval(timer);
	});

	const formatTime = (date) => {
		return date.toLocaleTimeString(lang === 'en' ? 'en-US' : 'id-ID', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});
	};

	const formatDate = (date) => {
		return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', {
			weekday: 'short',
			month: 'short',
			day: 'numeric'
		});
	};
</script>

<div
	class="min-h-screen bg-[#070b14] text-zinc-300 font-mono flex flex-col relative selection:bg-emerald-500/30"
>
	<!-- Top Bar -->
	<div
		class="sticky top-0 h-8 w-full bg-[#070b14]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 text-xs z-[100]"
	>
		<div class="flex items-center gap-4">
			<span class="text-zinc-400 hover:text-white cursor-pointer transition-colors"
				>● {t.activities}</span
			>
		</div>
		<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-400">
			<span>{formatDate(currentTime)}</span>
			<span>{formatTime(currentTime)}</span>
		</div>
		<div class="flex items-center gap-4 text-zinc-400">
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/></svg
			>
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
				/></svg
			>
			<div class="flex items-center gap-1">
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zm11-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zm-7 4a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H9a1 1 0 01-1-1v-5z"
					/></svg
				>
				<span>86%</span>
			</div>
		</div>
	</div>

	<div class="flex-1 flex relative p-4 gap-4 overflow-hidden">
		<!-- Background Glow -->
		<div
			class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"
		></div>

		<!-- Left Sidebar (Icons) -->
		<div
			class="w-14 bg-[#0d131f]/80 backdrop-blur-md rounded-2xl border border-white/5 flex flex-col items-center py-4 gap-6 z-50 sticky top-12 h-[calc(100vh-6rem)]"
		>
			<!-- Home -->
			<a
				href="/"
				class="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
				title="Home"
			>
				<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
					/></svg
				>
			</a>
			<!-- Projects -->
			<a
				href="#projects"
				class="p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
				title={t.myWork}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
					/></svg
				>
			</a>
			<!-- Email / Contact -->
			<a
				href="mailto:alfitojuanda14@gmail.com"
				class="p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
				title={t.getInTouch}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"
					/></svg
				>
			</a>
			<!-- GitHub -->
			<a
				href="https://github.com/aljuan14"
				target="_blank"
				class="p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
				title="GitHub"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
					><path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
			<!-- LinkedIn -->
			<a
				href="https://www.linkedin.com/in/alfito-juanda/"
				target="_blank"
				class="p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
				title="LinkedIn"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
					><path
						fill-rule="evenodd"
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
			<div class="mt-auto"></div>
			<button
				onclick={() => (lang = lang === 'en' ? 'id' : 'en')}
				class="p-2 w-12 h-12 flex items-center justify-center bg-emerald-500/20 border-2 border-emerald-500/50 rounded-xl text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all mb-2 font-black text-sm shadow-[0_0_10px_rgba(16,185,129,0.2)]"
				title="Toggle Language"
			>
				{lang.toUpperCase()}
			</button>
		</div>

		<!-- Main Layout -->
		<div
			class="flex-1 flex flex-col w-full h-[calc(100vh-2rem)] overflow-y-auto overflow-x-hidden scroll-smooth"
		>
			<!-- Dashboard Grid -->
			<div
				class="flex flex-col lg:flex-row gap-6 w-full px-2 lg:px-4 py-4 min-h-[calc(100vh-3rem)] items-center"
			>
				<!-- Left side widgets -->
				<div class="w-full lg:w-64 flex flex-col gap-6">
					<!-- Deploy Widget -->
					<div class="bg-[#0d131f]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 z-10">
						<div class="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-4 uppercase">
							<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
							{t.cloudDeploy}
						</div>
						<div class="flex items-center justify-between text-xs mb-6 px-2">
							<div class="px-3 py-1.5 bg-white/5 rounded border border-white/10 text-zinc-300">
								VPC
							</div>
							<div class="h-[1px] flex-1 bg-white/10 mx-2"></div>
							<div class="px-3 py-1.5 bg-white/5 rounded border border-white/10 text-zinc-300">
								EC2
							</div>
							<div class="h-[1px] flex-1 bg-white/10 mx-2"></div>
							<div class="px-3 py-1.5 bg-white/5 rounded border border-white/10 text-zinc-300">
								S3
							</div>
						</div>
						<div class="flex justify-between items-center text-xs">
							<div class="flex items-center gap-2 text-emerald-400">
								<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
								Live
							</div>
							<span class="text-zinc-500 font-mono">1,374 req/min</span>
						</div>
					</div>

					<!-- Model Widget -->
					<div
						class="bg-[#0d131f]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 z-10 mt-auto"
					>
						<div class="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-4">
							<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
							MODEL - FaceNet
						</div>
						<div class="text-xs text-zinc-400 font-mono mb-4">
							status: <span class="text-emerald-400">running</span> - transfer-learning
						</div>
						<div class="w-full h-1 bg-white/5 rounded-full mb-2 overflow-hidden">
							<div class="h-full bg-emerald-500 w-[94.5%]"></div>
						</div>
						<div class="flex justify-between text-xs text-zinc-500 font-mono">
							<span>val_accuracy</span>
							<span class="text-emerald-400">94.5%</span>
						</div>
					</div>
				</div>

				<!-- Center Profile Card -->
				<div class="flex-1 flex items-center justify-center relative z-10 w-full">
					<!-- Pulsing green dot in background -->
					<div
						class="absolute right-0 top-1/2 w-4 h-4 rounded-full bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)] border border-emerald-500/50"
					></div>

					<div
						class="w-full bg-[#121820]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
					>
						<div class="flex flex-col lg:flex-row gap-12">
							<!-- Content -->
							<div class="flex-1 flex flex-col justify-center">
								<div
									class="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-6 font-mono tracking-widest uppercase"
								>
									<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
									{t.welcome}
									{basics.name.toUpperCase()} OS
								</div>

								<h1 class="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 font-sans">
									{basics.name.toUpperCase()}
								</h1>

								<h2
									class="text-lg lg:text-xl text-emerald-400 font-bold mb-6 flex items-center gap-2 font-mono"
								>
									<span class="text-emerald-500">&gt;</span>
									{basics.label}
								</h2>

								<p class="text-zinc-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
									{basics.shortSummary}
								</p>

								<div class="flex items-center gap-2 text-zinc-500 text-sm mb-10">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/></svg
									>
									Indonesia
								</div>

								<div class="flex flex-wrap gap-4">
									<a
										href="#projects"
										class="px-6 py-3 bg-emerald-400 text-[#0d131f] rounded-xl font-bold text-sm hover:bg-emerald-300 transition-colors flex items-center gap-2"
									>
										<span>&rarr;</span>
										{t.viewWork}
									</a>
									<a
										href="#contact"
										class="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"
											/></svg
										>
										{t.getInTouch}
									</a>
									<a
										href="/cv.pdf"
										target="_blank"
										rel="noopener noreferrer"
										class="px-6 py-3 bg-transparent border border-emerald-500/30 text-emerald-400 rounded-xl font-bold text-sm hover:bg-emerald-500/10 transition-colors flex items-center gap-2"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/></svg
										>
										{t.viewCv}
									</a>
									<!-- 💖 For You Button -->
									<button
										onclick={openRomantic}
										class="for-you-btn px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
									>
										<span class="heart-icon">💖</span>
										For You
									</button>
								</div>
							</div>

							<!-- Profile Picture -->
							<div class="hidden lg:flex flex-col justify-center items-center">
								<div class="relative p-2 bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
									<!-- Neon glow effect -->
									<div
										class="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.15)] pointer-events-none"
									></div>
									<div
										class="w-64 h-64 bg-gradient-to-tr from-[#0d131f] via-[#1a2c3a] to-emerald-900/30 rounded-2xl overflow-hidden relative border border-white/5"
									>
										<img
											src="/images/alfito.png"
											alt="Alfito Juanda"
											class="w-full h-full object-cover object-center"
										/>
										<div
											class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#121820]/90 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2 whitespace-nowrap"
										>
											<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
											<span class="text-xs font-bold text-zinc-300">{t.work}</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Skills Footer -->
						<div class="mt-12 pt-6 border-t border-white/10">
							<div class="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono text-zinc-400">
								{#each skills.slice(0, 9) as skill, i}
									<span class="hover:text-emerald-400 transition-colors cursor-default"
										>{skill}</span
									>
									{#if i < Math.min(skills.length, 9) - 1}
										<span class="text-white/10">/</span>
									{/if}
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Right side widgets -->
				<div class="w-full lg:w-72 flex flex-col gap-6">
					<!-- Threat Feed -->
					<div
						class="bg-[#0d131f]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 z-10 flex-1 max-h-[300px]"
					>
						<div class="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-4 uppercase">
							<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
							{t.threatFeed}
						</div>
						<div class="font-mono text-[10px] text-zinc-500 space-y-2">
							<div class="flex gap-2">
								<span class="text-zinc-600">[01]</span>
								<span class="truncate">ufw: connection allowed from 192.168.1.5</span>
							</div>
							<div class="flex gap-2">
								<span class="text-zinc-600">[02]</span>
								<span class="truncate">fail2ban: 0 active bans</span>
							</div>
							<div class="flex gap-2">
								<span class="text-zinc-600">[03]</span>
								<span class="truncate">tls: handshake ok (ECDHE)</span>
							</div>
							<div class="flex gap-2">
								<span class="text-zinc-600">[04]</span>
								<span class="text-white font-bold truncate">audit: no anomalies detected</span>
							</div>
							<div class="flex gap-2">
								<span class="text-zinc-600">[05]</span>
								<span class="truncate text-emerald-500">system: optimal performance</span>
							</div>
						</div>
					</div>

					<!-- Terminal Widget -->
					<div
						class="bg-[#0d131f]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 z-10 mt-auto"
					>
						<div class="flex items-center gap-2 text-[10px] font-bold text-zinc-500 mb-3 font-mono">
							<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
							~/alfito - git
						</div>
						<div class="font-mono text-[10px] leading-relaxed">
							<div class="text-white mb-1">$ git log --oneline -4</div>
							<div class="text-zinc-400">
								<span class="text-emerald-400">1a2c9f</span> feat: deploy via nginx + pm2<br />
								<span class="text-emerald-400">8b41de</span> fix: open-graph dinamis<br />
								<span class="text-emerald-400">c77a02</span> perf: drizzle atomic tx<br />
								<span class="text-emerald-400">e90b15</span> init: alfito os
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- NEW SECTIONS: PORTFOLIO CONTENT -->
			<div
				class="max-w-[1400px] w-full mx-auto px-4 lg:px-12 pb-32 pt-20 flex flex-col gap-32 relative z-10"
			>
				<!-- MY WORK SECTION -->
				<section id="projects" class="flex flex-col gap-10">
					<div class="flex items-center gap-6">
						<h2 class="text-3xl font-black text-white font-sans uppercase tracking-tight">
							{t.myWork}
						</h2>
						<div class="h-[1px] flex-1 bg-white/10"></div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{#each cv.projects.slice(0, 4) as project}
							<div
								class="bg-[#121820]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col hover:border-emerald-500/50 transition-colors group relative overflow-hidden shadow-xl"
							>
								<div
									class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
								></div>

								<div class="flex justify-between items-start mb-6 relative z-10">
									<h3 class="text-3xl font-black text-white font-sans tracking-wide uppercase">
										{project.name}
									</h3>
									{#if project.url}
										<a
											href={project.url.startsWith('http') ? project.url : 'https://' + project.url}
											target="_blank"
											class="px-4 py-2 bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 rounded-full text-xs font-bold text-white flex items-center gap-2 transition-all"
										>
											{t.visit}
											<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"
												><path
													fill-rule="evenodd"
													d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
													clip-rule="evenodd"
												/></svg
											>
										</a>
									{/if}
								</div>

								<div
									class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-zinc-300 font-mono w-fit mb-6 uppercase tracking-wider relative z-10 font-bold"
								>
									{project.summary.split('-')[0].trim()}
								</div>

								<p
									class="text-sm lg:text-base text-zinc-400 mb-6 flex-1 relative z-10 leading-relaxed"
								>
									{project.summary.split('-').slice(1).join('-').trim() || project.summary}
								</p>

								<ul class="flex flex-col gap-3 mb-8 relative z-10">
									{#each project.highlights as highlight}
										<li class="flex gap-3 text-sm text-zinc-300 items-start">
											<span class="text-emerald-500 font-bold text-lg leading-none mt-0.5">▪</span>
											{highlight}
										</li>
									{/each}
								</ul>

								<div class="h-[1px] w-full bg-white/10 mb-6 relative z-10"></div>

								<div class="flex flex-wrap gap-3 relative z-10">
									{#each project.stack.split(',') as tech}
										<span
											class="px-4 py-1.5 bg-[#0d131f] border border-white/10 rounded-full text-xs font-mono text-white group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors"
										>
											{tech.trim()}
										</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- OTHER COOL STUFF -->
				<section class="flex flex-col gap-10">
					<div class="flex items-center gap-6">
						<div class="h-[1px] flex-1 bg-white/10"></div>
						<h2 class="text-3xl font-black text-white font-sans uppercase tracking-tight">
							{t.otherCool}
						</h2>
						<div class="h-[1px] flex-1 bg-white/10"></div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{#each cv.projects.slice(4) as project}
							<div
								class="bg-[#121820]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all group relative overflow-hidden"
							>
								<div
									class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors"
								>
									<svg
										class="w-5 h-5 text-zinc-400 group-hover:text-emerald-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/></svg
									>
								</div>
								<div
									class="flex items-center justify-between mb-3 group-hover:text-emerald-400 transition-colors"
								>
									<h3 class="text-xl font-black text-white font-sans uppercase">{project.name}</h3>
									{#if project.url}
										<a
											href={project.url}
											target="_blank"
											class="p-2 bg-white/5 hover:bg-emerald-500/20 rounded-full transition-colors"
											title={t.visit}
										>
											<svg
												class="w-4 h-4 text-emerald-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/></svg
											>
										</a>
									{/if}
								</div>
								<p class="text-sm text-zinc-400 mb-6 flex-1 leading-relaxed">{project.summary}</p>
								<div class="h-[1px] w-full bg-white/10 mb-4"></div>
								<div class="text-xs font-mono text-zinc-500 font-bold flex flex-wrap gap-2">
									{#each project.stack.split(',') as tech}
										<span class="group-hover:text-zinc-300 transition-colors"
											>#{tech.trim().replace(/\s+/g, '')}</span
										>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- JOURNEY & SKILLS -->
				<section class="flex flex-col gap-10">
					<div class="flex items-center gap-6">
						<h2 class="text-3xl font-black text-white font-sans uppercase tracking-tight">
							{t.journey}
						</h2>
						<div class="h-[1px] flex-1 bg-white/10"></div>
					</div>

					<div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
						<!-- Organization Experience -->
						<div class="flex-1 flex flex-col gap-8">
							<div class="flex items-center gap-3 mb-2">
								<span class="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></span>
								<h3 class="text-2xl font-black text-white font-sans uppercase tracking-wide">
									{t.orgExp}
								</h3>
							</div>

							<div class="flex flex-col gap-8 border-l-2 border-white/10 pl-8 relative ml-2">
								{#each cv.experiences_in_organization as exp}
									<div class="relative">
										<div
											class="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-[#070b14] border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
										></div>
										<div
											class="bg-[#121820]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/5 transition-colors"
										>
											<h4
												class="text-xl font-black text-white font-sans uppercase mb-2 tracking-wide"
											>
												{exp.organization}
											</h4>
											<div
												class="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs font-mono text-yellow-400 w-fit mb-4 uppercase font-bold tracking-wider"
											>
												{exp.position}
											</div>
											<p class="text-sm text-zinc-400 leading-relaxed">{exp.summary}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- Technical Arsenal -->
						<div class="flex-1 flex flex-col gap-8">
							<div class="flex items-center gap-3 mb-2">
								<span class="w-4 h-4 rounded-full bg-purple-500 animate-pulse"></span>
								<h3 class="text-2xl font-black text-white font-sans uppercase tracking-wide">
									{t.techArsenal}
								</h3>
							</div>

							<div class="flex flex-col gap-6">
								{#each cv.skillsByCategory || [] as cat}
									<div
										class="bg-[#121820]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
									>
										<h4
											class="text-sm font-black text-white font-sans uppercase mb-5 tracking-widest border-b border-white/10 pb-3"
										>
											{cat.category}
										</h4>
										<div class="flex flex-wrap gap-3">
											{#each cat.skills as skill}
												<span
													class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-400 hover:bg-emerald-500/20 transition-colors cursor-default"
												>
													{skill}
												</span>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</section>

				<!-- Footer -->
				<div class="mt-12 text-center text-zinc-500 font-mono text-xs border-t border-white/5 pt-8">
					<p>
						© {new Date().getFullYear()}
						{basics.name}. {t.builtWith} SvelteKit & Arhamy OS Theme.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- 💖 Romantic Modal Overlay -->
{#if showRomantic}
	<div class="romantic-overlay" role="dialog" aria-modal="true" aria-label="A message for Bella">
		<!-- Fireworks -->
		{#each fireworks as fw (fw.id)}
			<div
				class="firework"
				style="left:{fw.x}%; top:{fw.y}%; --delay:{fw.delay}s; --color:{fw.color}; --size:{fw.size}px;"
			></div>
		{/each}

		<!-- Falling Flowers -->
		{#each flowers as flower (flower.id)}
			<div
				class="falling-flower"
				style="left:{flower.left}%; animation-delay:{flower.delay}s; animation-duration:{flower.duration}s; font-size:{flower.size}rem; --sway:{flower.swayAmount}px;"
			>
				{flower.emoji}
			</div>
		{/each}

		<!-- Falling Petals -->
		{#each petals as petal (petal.id)}
			<div
				class="falling-petal"
				style="left:{petal.left}%; animation-delay:{petal.delay}s; animation-duration:{petal.duration}s; --rotate:{petal.rotate}deg;"
			></div>
		{/each}

		<!-- Center Content -->
		<div class="romantic-content">
			<!-- Close button -->
			<button class="close-btn" onclick={closeRomantic} aria-label="Close"> ✕ </button>

			<!-- Romantic Message Card -->
			<div class="message-card">
				<div class="hearts-row">
					<span class="float-heart" style="animation-delay:0s">💗</span>
					<span class="float-heart" style="animation-delay:0.3s">💕</span>
					<span class="float-heart" style="animation-delay:0.6s">💖</span>
					<span class="float-heart" style="animation-delay:0.9s">💝</span>
					<span class="float-heart" style="animation-delay:1.2s">💗</span>
				</div>

				<p class="romantic-for">✨ For You ✨</p>
				<h2 class="romantic-name">Bella</h2>
				<p class="romantic-message">
					&ldquo;Setiap hari bersamamu adalah hadiah terindah yang sekarang aku miliki. Aku ingin
					selalu mendengar suaramu di pagi hari sayang. Kamu adalah cahaya indah di hari-hariku.
					Senyum manismu adalah alasan aku selalu tersenyum. Aku tidak bisa membayangkan hidup
					tanpamu&hellip;
					<br /><br />
					<strong>Please stay with me. 🌸</strong>&rdquo;
				</p>

				<div class="romantic-divider">— 💌 —</div>

				<!-- Thumbelina Bouquet -->
				<div class="bouquet-container">
					<div class="bouquet-wrap">
						<!-- Flowers in bouquet -->
						<div class="bouquet-flowers">
							<span class="b-flower b-f1">🌸</span>
							<span class="b-flower b-f2">🌺</span>
							<span class="b-flower b-f3">🌼</span>
							<span class="b-flower b-f4">🌷</span>
							<span class="b-flower b-f5">🪷</span>
							<span class="b-flower b-f6">🌹</span>
							<span class="b-flower b-f7">💐</span>
						</div>
						<!-- Thumbelina character -->
						<div class="thumbelina">
							<div class="thumb-body">
								<div class="thumb-head">👧</div>
								<div class="thumb-dress">👗</div>
							</div>
							<div class="thumb-wings">🦋</div>
						</div>
						<!-- Bouquet wrap ribbon -->
						<div class="bouquet-ribbon">
							<div class="ribbon-body"></div>
							<div class="ribbon-bow">🎀</div>
						</div>
					</div>
					<p class="bouquet-label">Specially for Bella 💕</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		background-color: #070b14;
	}

	:global(html.no-scroll),
	:global(body.no-scroll) {
		overflow: hidden !important;
		height: 100% !important;
	}

	/* Custom scrollbar for the main content area */
	.overflow-y-auto::-webkit-scrollbar {
		width: 8px;
	}
	.overflow-y-auto::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.2);
	}
	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: rgba(16, 185, 129, 0.2);
		border-radius: 10px;
	}
	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(16, 185, 129, 0.4);
	}

	/* ===== FOR YOU BUTTON ===== */
	.for-you-btn {
		background: linear-gradient(135deg, #ff69b4, #ff1493, #c2185b);
		color: white;
		border: none;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow:
			0 0 20px rgba(255, 105, 180, 0.4),
			0 0 40px rgba(255, 20, 147, 0.2);
		animation: pulse-pink 2s infinite;
	}
	.for-you-btn:hover {
		transform: scale(1.08) translateY(-2px);
		box-shadow:
			0 0 30px rgba(255, 105, 180, 0.7),
			0 0 60px rgba(255, 20, 147, 0.4);
		background: linear-gradient(135deg, #ff85c2, #ff1493, #e91e8c);
	}
	.for-you-btn::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -60%;
		width: 40%;
		height: 200%;
		background: rgba(255, 255, 255, 0.3);
		transform: skewX(-20deg);
		animation: shimmer-btn 2.5s infinite;
	}
	.heart-icon {
		display: inline-block;
		animation: heartbeat 1.2s infinite;
	}
	@keyframes heartbeat {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.3);
		}
	}
	@keyframes pulse-pink {
		0%,
		100% {
			box-shadow:
				0 0 20px rgba(255, 105, 180, 0.4),
				0 0 40px rgba(255, 20, 147, 0.2);
		}
		50% {
			box-shadow:
				0 0 35px rgba(255, 105, 180, 0.7),
				0 0 70px rgba(255, 20, 147, 0.4);
		}
	}
	@keyframes shimmer-btn {
		0% {
			left: -60%;
		}
		100% {
			left: 120%;
		}
	}

	/* ===== ROMANTIC OVERLAY ===== */
	.romantic-overlay {
		position: fixed;
		inset: 0;
		background: radial-gradient(ellipse at center, #1a0010 0%, #0d0008 40%, #050004 100%);
		z-index: 9999;
		overflow: hidden;
		clip-path: inset(0);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: overlayIn 0.5s ease;
	}
	@keyframes overlayIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* ===== FALLING FLOWERS ===== */
	.falling-flower {
		position: fixed;
		top: -120px;
		z-index: 10000;
		animation: flowerFall ease-in-out infinite;
		user-select: none;
		pointer-events: none;
		will-change: transform, opacity;
	}
	@keyframes flowerFall {
		0% {
			transform: translateY(0) translateX(0px) rotate(0deg) scale(0.6);
			opacity: 0;
		}
		5% {
			opacity: 1;
			transform: translateY(5vh) translateX(8px) rotate(15deg) scale(1);
		}
		25% {
			transform: translateY(25vh) translateX(var(--sway, 40px)) rotate(90deg) scale(1.1);
		}
		50% {
			transform: translateY(50vh) translateX(calc(var(--sway, 40px) * -0.5)) rotate(180deg)
				scale(0.95);
			opacity: 1;
		}
		75% {
			transform: translateY(75vh) translateX(var(--sway, 40px)) rotate(270deg) scale(1.05);
			opacity: 0.8;
		}
		95% {
			opacity: 0.3;
		}
		100% {
			transform: translateY(110vh) translateX(0px) rotate(360deg) scale(0.7);
			opacity: 0;
		}
	}

	/* ===== FALLING PETALS ===== */
	.falling-petal {
		position: fixed;
		top: -20px;
		z-index: 10000;
		width: 12px;
		height: 14px;
		background: radial-gradient(ellipse, #ffb6c1 0%, #ff69b4 60%, #ff1493 100%);
		border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%;
		animation: petalFall ease-in-out infinite;
		pointer-events: none;
		will-change: transform, opacity;
	}
	@keyframes petalFall {
		0% {
			transform: translateY(0) rotate(var(--rotate, 0deg)) scale(0);
			opacity: 0;
		}
		8% {
			opacity: 0.9;
			transform: translateY(8vh) rotate(calc(var(--rotate, 0deg) + 45deg)) scale(1);
		}
		50% {
			transform: translateY(50vh) rotate(calc(var(--rotate, 0deg) + 200deg)) scale(1.1);
			opacity: 0.8;
		}
		90% {
			opacity: 0.2;
		}
		100% {
			transform: translateY(110vh) rotate(calc(var(--rotate, 0deg) + 420deg)) scale(0.6);
			opacity: 0;
		}
	}

	/* ===== FIREWORKS ===== */
	.firework {
		position: fixed;
		z-index: 10001;
		pointer-events: none;
		animation: fireworkBurst 1.5s ease-out infinite;
		animation-delay: var(--delay, 0s);
	}
	.firework::before,
	.firework::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: var(--size, 80px);
		height: var(--size, 80px);
		margin-left: calc(var(--size, 80px) / -2);
		margin-top: calc(var(--size, 80px) / -2);
		border-radius: 50%;
		background: radial-gradient(circle, var(--color, #ff69b4) 0%, transparent 70%);
		animation: fireworkRing 1.5s ease-out infinite;
		animation-delay: var(--delay, 0s);
	}
	.firework::after {
		width: calc(var(--size, 80px) * 0.5);
		height: calc(var(--size, 80px) * 0.5);
		margin-left: calc(var(--size, 80px) * -0.25);
		margin-top: calc(var(--size, 80px) * -0.25);
		animation-delay: calc(var(--delay, 0s) + 0.2s);
	}
	@keyframes fireworkBurst {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
	@keyframes fireworkRing {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	/* ===== CLOSE BUTTON ===== */
	.close-btn {
		position: fixed;
		top: 1.5rem;
		right: 1.5rem;
		z-index: 10010;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 105, 180, 0.4);
		color: #ffb6c1;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s;
		backdrop-filter: blur(10px);
	}
	.close-btn:hover {
		background: rgba(255, 20, 147, 0.3);
		transform: scale(1.1) rotate(90deg);
		border-color: #ff69b4;
	}

	/* ===== ROMANTIC CONTENT ===== */
	.romantic-content {
		position: relative;
		z-index: 10005;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 2rem;
		box-sizing: border-box;
	}

	/* ===== MESSAGE CARD ===== */
	.message-card {
		background: rgba(30, 0, 20, 0.7);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 105, 180, 0.3);
		border-radius: 2rem;
		padding: 3rem 2.5rem;
		max-width: 600px;
		width: 100%;
		text-align: center;
		box-shadow:
			0 0 60px rgba(255, 20, 147, 0.3),
			0 0 120px rgba(255, 105, 180, 0.15),
			inset 0 0 60px rgba(255, 20, 147, 0.05);
		animation: cardIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
		max-height: 90vh;
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.message-card::-webkit-scrollbar {
		display: none;
	}
	@keyframes cardIn {
		from {
			transform: scale(0.5) translateY(30px);
			opacity: 0;
		}
		to {
			transform: scale(1) translateY(0);
			opacity: 1;
		}
	}

	/* ===== HEARTS ROW ===== */
	.hearts-row {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}
	.float-heart {
		font-size: 1.8rem;
		display: inline-block;
		animation: floatHeart 2s ease-in-out infinite;
	}
	@keyframes floatHeart {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-12px) scale(1.2);
		}
	}

	.romantic-for {
		font-size: 0.9rem;
		color: #ffb6c1;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		margin: 0 0 0.5rem;
		animation: glow-text 2s ease-in-out infinite;
	}
	.romantic-name {
		font-size: 3.5rem;
		font-weight: 900;
		background: linear-gradient(135deg, #ff69b4, #ff1493, #ffb6c1, #ff69b4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 1.5rem;
		text-shadow: none;
		animation: nameShine 3s linear infinite;
		background-size: 200% auto;
		font-family: Georgia, serif;
	}
	@keyframes nameShine {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: 200% center;
		}
	}
	.romantic-message {
		color: #f9d0e0;
		font-size: 1rem;
		line-height: 1.8;
		margin: 0 0 1.5rem;
		font-style: italic;
	}
	.romantic-divider {
		color: #ff69b4;
		font-size: 1.2rem;
		margin: 1.5rem 0;
		animation: floatHeart 2.5s ease-in-out infinite;
	}
	@keyframes glow-text {
		0%,
		100% {
			color: #ffb6c1;
			text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
		}
		50% {
			color: #ff69b4;
			text-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
		}
	}

	/* ===== BOUQUET ===== */
	.bouquet-container {
		margin-top: 1rem;
	}
	.bouquet-wrap {
		position: relative;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		animation: bouquetSway 3s ease-in-out infinite;
	}
	@keyframes bouquetSway {
		0%,
		100% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
	}
	.bouquet-flowers {
		position: relative;
		width: 120px;
		height: 80px;
	}
	.b-flower {
		position: absolute;
		animation: petalSpin 3s ease-in-out infinite;
	}
	.b-f1 {
		font-size: 2rem;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 0s;
	}
	.b-f2 {
		font-size: 1.8rem;
		top: 10px;
		left: 10px;
		animation-delay: 0.2s;
	}
	.b-f3 {
		font-size: 1.6rem;
		top: 10px;
		right: 10px;
		animation-delay: 0.4s;
	}
	.b-f4 {
		font-size: 1.7rem;
		top: 30px;
		left: 0;
		animation-delay: 0.6s;
	}
	.b-f5 {
		font-size: 1.9rem;
		top: 30px;
		right: 0;
		animation-delay: 0.8s;
	}
	.b-f6 {
		font-size: 1.5rem;
		top: 50px;
		left: 20px;
		animation-delay: 1s;
	}
	.b-f7 {
		font-size: 2rem;
		top: 5px;
		left: 35px;
		animation-delay: 1.2s;
	}
	@keyframes petalSpin {
		0%,
		100% {
			transform: scale(1) rotate(0deg);
		}
		50% {
			transform: scale(1.15) rotate(10deg);
		}
	}
	.thumbelina {
		position: relative;
		margin-top: -10px;
		animation: thumbelinaFloat 2.5s ease-in-out infinite;
	}
	@keyframes thumbelinaFloat {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}
	.thumb-body {
		text-align: center;
		line-height: 1;
	}
	.thumb-head {
		font-size: 1.8rem;
	}
	.thumb-dress {
		font-size: 1.5rem;
		margin-top: -5px;
	}
	.thumb-wings {
		position: absolute;
		top: 0;
		right: -25px;
		font-size: 1.2rem;
		animation: wingFlap 0.6s ease-in-out infinite;
	}
	@keyframes wingFlap {
		0%,
		100% {
			transform: scaleX(1) rotate(-10deg);
		}
		50% {
			transform: scaleX(-1) rotate(10deg);
		}
	}
	.bouquet-ribbon {
		margin-top: 5px;
		text-align: center;
	}
	.ribbon-body {
		width: 30px;
		height: 40px;
		background: linear-gradient(180deg, #c2185b, #880e4f);
		margin: 0 auto;
		border-radius: 0 0 5px 5px;
		position: relative;
	}
	.ribbon-body::before,
	.ribbon-body::after {
		content: '';
		position: absolute;
		top: 0;
		width: 30px;
		height: 50px;
		background: linear-gradient(135deg, #e91e63, #c2185b);
		border-radius: 0 0 30px 30px;
	}
	.ribbon-body::before {
		right: 20px;
		transform: rotate(-15deg);
	}
	.ribbon-body::after {
		left: 20px;
		transform: rotate(15deg);
	}
	.ribbon-bow {
		font-size: 1.8rem;
		margin-top: -10px;
		display: block;
		animation: bowBounce 1.5s ease-in-out infinite;
	}
	@keyframes bowBounce {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1) rotate(5deg);
		}
	}
	.bouquet-label {
		color: #ffb6c1;
		font-size: 0.85rem;
		margin-top: 1rem;
		letter-spacing: 0.1em;
		animation: glow-text 2s ease-in-out infinite;
	}
</style>
