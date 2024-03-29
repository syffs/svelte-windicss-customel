const production = !process.env.ROLLUP_WATCH // or some other env var like NODE_ENV
module.exports = {
  theme: {
    screens: {
      '3xs': '160px',
      '2xs': '240px',
      'xs': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      gridTemplateColumns: {

      }
    }
  },
  // only needed in Tailwind 1.0 for tailwind 2.0 compat
  // future: {
  //     purgeLayersByDefault: true,
  //     removeDeprecatedGapUtilities: true,
  //   },
  plugins: [
    // for tailwind UI users only
    // require('@tailwindcss/ui'),
    // other plugins here
  ],
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.svelte',
      // may also want to include HTML files
      './src/**/*.html'
    ],
    // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
      const matches = broadMatches
        .concat(broadMatchesWithoutTrailingSlash)
      return matches
    },
    enabled: production // disable purge in dev
  },
}
