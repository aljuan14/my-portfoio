import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

// Renders data/cv_ats.json into static/cv-ats-en.pdf and static/cv-ats-id.pdf.
// ATS-friendly on purpose (education right after the summary, as for a fresh graduate): one column, real selectable text, standard headings,
// no tables, icons, or photos. Set PUPPETEER_EXECUTABLE_PATH to use a system Chrome.

const esc = (s = '') =>
	String(s)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

const heading = (text) => `<h2>${esc(text)}</h2>`;

const entryHead = (title, date) =>
	`<div class="row"><span class="title">${title}</span>${date ? `<span class="date">${esc(date)}</span>` : ''}</div>`;

const bullets = (items) => `<ul>${items.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;

function render(data, contact, lang) {
	const location = lang === 'id' ? contact.locationId : contact.location;
	const contactLine = [
		esc(location),
		esc(contact.phone),
		`<a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a>`,
		...contact.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`)
	].join(' | ');

	const projects = data.projects
		.map((p) => {
			const title = `${esc(p.name)}${p.context ? ` <span class="context">| ${esc(p.context)}</span>` : ''}`;
			const links = p.links ?? (p.link ? [p.link] : []);
			const link = links.length
				? `<div class="meta">${links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(', ')}</div>`
				: '';
			return `<div class="entry">${entryHead(title, p.date)}${link}${bullets(p.bullets)}<div class="meta"><b>${esc(data.techLabel)}:</b> ${esc(p.tech)}</div></div>`;
		})
		.join('');

	const organizations = data.organizations
		.map(
			(o) =>
				`<div class="entry">${entryHead(`${esc(o.organization)} <span class="context">| ${esc(o.role)}</span>`, o.date)}${bullets(o.bullets)}</div>`
		)
		.join('');

	const education = data.education
		.map(
			(e) =>
				`<div class="entry">${entryHead(esc(e.institution), e.date)}<div class="meta">${esc(e.degree)}</div></div>`
		)
		.join('');

	const achievements = `<ul>${data.achievements
		.map((a) => `<li>${esc(a.title)}${a.date ? ` (${esc(a.date)})` : ''}</li>`)
		.join('')}</ul>`;

	const skills = data.skills
		.map((s) => `<p class="skill"><b>${esc(s.category)}:</b> ${esc(s.items)}</p>`)
		.join('');

	return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<title>${esc(contact.name)} - CV (${lang.toUpperCase()})</title>
<style>
	@page { size: A4; margin: 14mm 16mm; }
	* { margin: 0; padding: 0; box-sizing: border-box; }
	body { font-family: Arial, 'Liberation Sans', Helvetica, sans-serif; font-size: 10pt; line-height: 1.38; color: #111; }
	a { color: #111; text-decoration: none; }
	h1 { font-size: 20pt; line-height: 1.1; }
	.subtitle { font-size: 11pt; font-weight: bold; margin-top: 2pt; }
	.contact { font-size: 9pt; margin-top: 4pt; }
	h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: .04em; border-bottom: 1px solid #111;
		padding-bottom: 1.5pt; margin: 11pt 0 5pt; break-after: avoid; }
	.entry { margin-bottom: 6pt; break-inside: avoid; }
	.row { display: flex; justify-content: space-between; gap: 12pt; }
	.title { font-weight: bold; }
	.context { font-weight: normal; }
	.date { white-space: nowrap; }
	.meta { font-size: 9.5pt; }
	ul { margin: 2pt 0 2pt 13pt; }
	li { margin-bottom: 1pt; }
	.skill { margin-bottom: 2pt; }
	p.summary { text-align: left; }
</style></head><body>
	<h1>${esc(contact.name)}</h1>
	<div class="subtitle">${esc(data.title)}</div>
	<div class="contact">${contactLine}</div>

	${heading(data.headings.summary)}
	<p class="summary">${esc(data.summary)}</p>

	${heading(data.headings.education)}
	${education}

	${heading(data.headings.skills)}
	${skills}

	${heading(data.headings.projects)}
	${projects}

	${heading(data.headings.organizations)}
	${organizations}

	${heading(data.headings.achievements)}
	${achievements}
</body></html>`;
}

async function generateAtsCv() {
	const cv = JSON.parse(fs.readFileSync(path.join(root, 'data/cv_ats.json'), 'utf8'));
	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
		headless: 'new'
	});

	try {
		for (const lang of ['en', 'id']) {
			const page = await browser.newPage();
			await page.setContent(render(cv[lang], cv.contact, lang), { waitUntil: 'load' });
			const out = path.join(root, `static/cv-ats-${lang}.pdf`);
			await page.pdf({ path: out, format: 'A4', printBackground: false, preferCSSPageSize: true });
			await page.close();
			console.log('Saved ' + out);
		}
	} finally {
		await browser.close();
	}
}

generateAtsCv().catch((err) => {
	console.error(err);
	process.exit(1);
});
