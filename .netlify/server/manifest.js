var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "fonts/montserrat/images/logo.png", "fonts/montserrat/montserrat-v24-latin-300.eot", "fonts/montserrat/montserrat-v24-latin-300.svg", "fonts/montserrat/montserrat-v24-latin-300.ttf", "fonts/montserrat/montserrat-v24-latin-300.woff", "fonts/montserrat/montserrat-v24-latin-300.woff2", "fonts/montserrat/montserrat-v24-latin-800.eot", "fonts/montserrat/montserrat-v24-latin-800.svg", "fonts/montserrat/montserrat-v24-latin-800.ttf", "fonts/montserrat/montserrat-v24-latin-800.woff", "fonts/montserrat/montserrat-v24-latin-800.woff2", "fonts/montserrat/montserrat-v24-latin-regular.eot", "fonts/montserrat/montserrat-v24-latin-regular.svg", "fonts/montserrat/montserrat-v24-latin-regular.ttf", "fonts/montserrat/montserrat-v24-latin-regular.woff", "fonts/montserrat/montserrat-v24-latin-regular.woff2", "images/logo.svg", "robots.txt"]),
  mimeTypes: { ".png": "image/png", ".eot": "application/vnd.ms-fontobject", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-bc78a7b6.js", "js": ["start-bc78a7b6.js", "chunks/index-09c70e88.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
