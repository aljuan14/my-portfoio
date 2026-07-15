export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","images/alfito.png","images/posts/aws-summit-2025/all-volunteers-speakers.jpg","images/posts/aws-summit-2025/speaking.jpg","images/posts/aws-summit-2025/with-albert-irfan.jpg","images/posts/aws-summit-2025/with-jason.jpg","images/posts/aws-summit-2025/with-shafraz-cathy.jpg","images/posts/llmao/benchmark.png","resume.pdf","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CNd5pf5-.js",app:"_app/immutable/entry/app.CIsG8eaE.js",imports:["_app/immutable/entry/start.CNd5pf5-.js","_app/immutable/chunks/CWO_knLP.js","_app/immutable/chunks/Dj-u7iZK.js","_app/immutable/chunks/DI5hNEVN.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/B1K-Qevl.js","_app/immutable/entry/app.CIsG8eaE.js","_app/immutable/chunks/BtJrtIZ5.js","_app/immutable/chunks/Dj-u7iZK.js","_app/immutable/chunks/Cs2d4Cc4.js","_app/immutable/chunks/X7nYlg_2.js","_app/immutable/chunks/nSKK2jrr.js","_app/immutable/chunks/DaQBbwdu.js","_app/immutable/chunks/DI5hNEVN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/spotify",
				pattern: /^\/api\/spotify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/spotify/_server.js'))
			},
			{
				id: "/api/u/c/api/send",
				pattern: /^\/api\/u\/c\/api\/send\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/u/c/api/send/_server.js'))
			},
			{
				id: "/api/u/s",
				pattern: /^\/api\/u\/s\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/u/s/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/robots.txt",
				pattern: /^\/robots\.txt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/robots.txt/_server.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
