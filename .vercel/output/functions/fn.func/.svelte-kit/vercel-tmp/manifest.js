export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6_BMxYlE.js","app":"_app/immutable/entry/app.DAxOjmzJ.js","imports":["_app/immutable/entry/start.6_BMxYlE.js","_app/immutable/chunks/entry.CK4fRsCe.js","_app/immutable/chunks/scheduler.BNBspLx6.js","_app/immutable/chunks/index.6Dl2lb1K.js","_app/immutable/entry/app.DAxOjmzJ.js","_app/immutable/chunks/scheduler.BNBspLx6.js","_app/immutable/chunks/index.Vt5M9wIh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
