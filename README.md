# Rebuilding Symfony

A rebuild of the [symfony.com](https://symfony.com) website, built using static HTML and [Tailwind CSS](https://tailwindcss.com). This was created by [Oliver Davies](https://www.oliverdavies.uk) as an example for his [Taking Flight with Tailwind CSS talk](https://www.oliverdavies.uk/talks/taking-flight-tailwind-css).

Some interesting points:

- Uses Tailwind CSS 1.7.
- Uses [Webpack Encore](https://github.com/symfony/webpack-encore) to generate the output file.
- Supports dark mode using a custom `screen` with a raw media query using `prefers-color-scheme: dark`.
- Uses the PostCSS Nested plugin to add nesting functionality within `tailwind.pcss`.
