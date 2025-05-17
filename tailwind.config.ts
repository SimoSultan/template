import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    // Takes each utility class that needs the variant
    // Applies the variant prefix ('initial:')
    // Escapes special characters
    // Wraps it in :where() to reduce specificity before generating CSS
    plugin(function ({ addVariant, e }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      addVariant('initial', ({ modifySelectors }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `:where(.${e(`initial:${className}`)})`
        })
      })
    }),
  ],
}
