import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "#D4AF37",
      secondary: "#1A1A1A",
      neutral: "#000000",
      headline: "#E2E2E2",
      text: "#D0C5AF",
    },
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --color-primary: #D4AF37;
          --color-secondary: #1A1A1A;
          --color-headline: #E2E2E2;
          --color-text: #D0C5AF;
        }
      `,
    },
  ],
});
