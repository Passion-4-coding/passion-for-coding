const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/montserrat/images/logo.png","fonts/montserrat/montserrat-v24-latin-300.eot","fonts/montserrat/montserrat-v24-latin-300.svg","fonts/montserrat/montserrat-v24-latin-300.ttf","fonts/montserrat/montserrat-v24-latin-300.woff","fonts/montserrat/montserrat-v24-latin-300.woff2","fonts/montserrat/montserrat-v24-latin-800.eot","fonts/montserrat/montserrat-v24-latin-800.svg","fonts/montserrat/montserrat-v24-latin-800.ttf","fonts/montserrat/montserrat-v24-latin-800.woff","fonts/montserrat/montserrat-v24-latin-800.woff2","fonts/montserrat/montserrat-v24-latin-regular.eot","fonts/montserrat/montserrat-v24-latin-regular.svg","fonts/montserrat/montserrat-v24-latin-regular.ttf","fonts/montserrat/montserrat-v24-latin-regular.woff","fonts/montserrat/montserrat-v24-latin-regular.woff2","images/logo.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain"},
	_: {
		entry: {"file":"start-bc78a7b6.js","js":["start-bc78a7b6.js","chunks/index-09c70e88.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
