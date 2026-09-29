import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

// Renders static/og-image.png (1200x630), the link preview used by Seo.svelte.
// Set PUPPETEER_EXECUTABLE_PATH to use a system Chrome instead of Puppeteer's download.
async function generateOgImage() {
	const cv = JSON.parse(fs.readFileSync(path.join(root, 'data/cv_en.json'), 'utf8'));
	const { name, label, shortSummary } = cv.basics;

	const fileUrl = (p) => 'file://' + path.join(root, p);
	const photo = fileUrl('static/images/alfito.png');
	const outfit = fileUrl('node_modules/@fontsource/outfit/files/outfit-latin-900-normal.woff2');
	const outfitBold = fileUrl('node_modules/@fontsource/outfit/files/outfit-latin-700-normal.woff2');
	const skills = cv.skills.slice(0, 5);
	// shortSummary opens with the label, which is already shown as the subtitle
	const tagline = shortSummary.replace(`${label}.`, '').trim();

	const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
	@font-face { font-family: Outfit; font-weight: 900; src: url(${outfit}) format('woff2'); }
	@font-face { font-family: Outfit; font-weight: 700; src: url(${outfitBold}) format('woff2'); }
	* { margin: 0; box-sizing: border-box; }
	body { width: 1200px; height: 630px; background: #070b14; color: #e4e4e7;
		font-family: ui-monospace, 'DejaVu Sans Mono', monospace; overflow: hidden; position: relative; }
	.glow { position: absolute; width: 900px; height: 600px; left: 150px; top: 20px;
		background: radial-gradient(closest-side, rgba(6,78,59,.55), transparent); }
	.card { position: absolute; inset: 48px; border: 1px solid rgba(255,255,255,.1); border-radius: 36px;
		background: rgba(18,24,32,.92); display: flex; align-items: center; gap: 56px; padding: 0 64px; }
	.text { flex: 1; min-width: 0; }
	.kicker { color: #34d399; font-size: 18px; font-weight: 700; letter-spacing: .2em; display: flex; align-items: center; gap: 12px; }
	.dot { width: 12px; height: 12px; border-radius: 50%; background: #10b981; }
	h1 { font-family: Outfit; font-weight: 900; font-size: 84px; line-height: 1.02; color: #fff; margin: 22px 0 18px; text-transform: uppercase; }
	h2 { font-family: Outfit; font-weight: 700; font-size: 34px; color: #34d399; }
	p { font-size: 21px; line-height: 1.5; color: #a1a1aa; margin-top: 18px; max-width: 560px; }
	.skills { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 10px; }
	.skills span { font-size: 16px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(16,185,129,.35);
		color: #34d399; background: rgba(16,185,129,.1); }
	.photo { width: 330px; height: 390px; border-radius: 28px; padding: 10px; border: 1px solid rgba(255,255,255,.1);
		background: rgba(255,255,255,.04); box-shadow: 0 0 60px rgba(16,185,129,.18); flex-shrink: 0; }
	.photo div { width: 100%; height: 100%; border-radius: 20px; overflow: hidden;
		background: linear-gradient(to top right, #0d131f, #1a2c3a, rgba(6,78,59,.35)); }
	.photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
</style></head><body>
	<div class="glow"></div>
	<div class="card">
		<div class="text">
			<div class="kicker"><span class="dot"></span>PORTFOLIO</div>
			<h1>${name}</h1>
			<h2>&gt; ${label}</h2>
			<p>${tagline}</p>
			<div class="skills">${skills.map((s) => `<span>${s}</span>`).join('')}</div>
		</div>
		<div class="photo"><div><img src="${photo}"></div></div>
	</div>
</body></html>`;

	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
		headless: 'new'
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 630 });
	// A file:// page is needed so the local font and photo URLs load
	const tmp = path.join(root, '.og-image.tmp.html');
	fs.writeFileSync(tmp, html);
	try {
		await page.goto(fileUrl('.og-image.tmp.html'), { waitUntil: 'networkidle0' });
		await page.evaluateHandle('document.fonts.ready');
		const out = path.join(root, 'static/og-image.png');
		await page.screenshot({ path: out, type: 'png' });
		console.log('Saved ' + out);
	} finally {
		fs.unlinkSync(tmp);
		await browser.close();
	}
}

generateOgImage().catch((err) => {
	console.error(err);
	process.exit(1);
});
