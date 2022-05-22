var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var app = "";
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-k61g4i{display:flex;align-items:center;padding:15px}.logo.svelte-k61g4i{max-width:50px}.text.svelte-k61g4i{margin-left:10px}.passion.svelte-k61g4i{font-size:var(--font-size-sm);color:var(--color-primary)}.coding.svelte-k61g4i{font-size:var(--font-size-lg);color:var(--color-secondary);text-transform:uppercase;font-weight:bold}",
  map: null
};
const Header = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><div class="${"container svelte-k61g4i"}"><img class="${"logo svelte-k61g4i"}" src="${"/images/logo.svg"}" alt="${"passion for coding logo"}">
    <div class="${"text svelte-k61g4i"}"><p class="${"passion svelte-k61g4i"}">Passion for</p>
      <p class="${"coding svelte-k61g4i"}">coding</p></div></div></header>



`;
});
const _layout = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_5f038599.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}
</main>`;
});
