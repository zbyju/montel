/** @type {import('tailwindcss').Config} */

const generatedSafelist = ["blue", "pink", "cyan"].reduce((safelist, color) => {
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const bgs = weights.map((w) => `bg-${color}-${w}`);
  const hoverBgs = weights.map((w) => `hover:bg-${color}-${w}`);
  const texts = weights.map((w) => `text-${color}-${w}`);
  return safelist.concat(bgs, hoverBgs, texts);
}, []);

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: generatedSafelist,
  theme: {
    extend: {},
  },
  plugins: [],
};
