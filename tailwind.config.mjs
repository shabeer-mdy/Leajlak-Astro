/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "rgba(236, 97, 49, 1)",
        lightGray: "rgba(246, 246, 246, 1)",
        darkGray: "rgba(38, 38, 38, 1)",
        customYellow: "rgba(247, 182, 20, 1)",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
      },
      boxShadow: {
        Cxl: "8px 3px 10px 0px rgba(0, 0, 0, 0.25);",
        innerLg: "inset 0 0px 10px 0 rgb(0 0 0 / 0.2);",
      },
      letterSpacing: {
        xl: "0.2em",
      },
      flex: {
        card_full: "0 1 calc(20% - 20px)",
        card_md: "0 1 calc(50% - 20px)",
        card_sm: "0 1 calc(100% - 20px)",
        card_solution_xl: "0 1 calc(33.3333% - 20px)",
        card_solution_md: "0 1 calc(50% - 40px)",
        card_xl: "0 1 calc(100% - 20px)",
        card_testimonial_xl: "0 1 calc(33.3333% - 20px)",
        card_team_xl: "0 1 25%",
        card_team_md: "0 1 50%",
        card_team_sm: "0 1 100%",
      },
    },
  },
  plugins: [],
};
