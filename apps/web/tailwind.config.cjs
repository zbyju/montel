/** @type {import('tailwindcss').Config} */

const generatedSafelist = [
  "white",
  "slate",
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
  const importantWeights = [50, 100, 900]
  const bgs = weights.map((w) => `bg-${color}-${w}`);
  const fills = importantWeights.map(w => `fill-${color}-${w}`)
  const hoverBgs = weights.map((w) => `hover:bg-${color}-${w}`);
  const texts = weights.map((w) => `text-${color}-${w}`);
  const froms = weights.map((w) => `from-${color}-${w}`);
  const tos = weights.map((w) => `to-${color}-${w}`);
  return safelist.concat(bgs, hoverBgs, texts, fills, froms, tos);
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

const generateResponsiveSafelist = [
  "text-center",
  "text-left",
  "text-right",
  "items-start",
  "items-end",
  "items-center",
  "self-start",
  "self-end",
  "self-center",
].reduce((safelist, cls) => {
  return safelist.concat("xs:" + cls, "sm:" + cls, "md:" + cls, "lg:" + cls);
}, []);

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [].concat(
    generatedSafelist,
    generateBasicSafelist,
    generateResponsiveSafelist
  ),
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
