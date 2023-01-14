/** @type {import('tailwindcss').Config} */

const generatedSafelist = [
  "white",
  "blue",
  "pink",
  "cyan",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "sky",
  "indigo",
  "violet",
  "rose",
].reduce((safelist, color) => {
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const bgs = weights.map((w) => `bg-${color}-${w}`);
  const hoverBgs = weights.map((w) => `hover:bg-${color}-${w}`);
  const texts = weights.map((w) => `text-${color}-${w}`);
  const froms = weights.map((w) => `from-${color}-${w}`);
  const tos = weights.map((w) => `to-${color}-${w}`);
  return safelist.concat(bgs, hoverBgs, texts, froms, tos);
}, []);

const generateBasicSafelist = ["white"].reduce((safelist, color) => {
  return safelist.concat(
    "bg-" + color,
    "hover:bg-" + color,
    "text-" + color,
    "from-" + color,
    "to-" + color
  );
}, []);

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [].concat(generatedSafelist, generateBasicSafelist),
  theme: {
    extend: {},
  },
  plugins: [],
};
