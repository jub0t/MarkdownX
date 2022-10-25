# Markdown For Tailwinds

⚡ Markdown parser compatible with Tailwind Css. Prism.js themes can be found [here](./styles).

![Preview](./preview.png)

## Installation

Get the file from Releases, get styles from [here](https://github.com/PrismJS/prism-themes)

## Usage

```js
// Initialized
const Parser = new Tayparser();
```

```js
// Parse Markdown
const MarkdownCode = `
# Blog Post
`;
const Code = Parser.parse(MarkdownCode);
console.log(Code);
```

```js
// Highlight All <pre> Snippets
Prism.highlightAll();
```

```js
// Escape HTML
const Markdown = new TailDown({ escapeHTML: true });
```

## Config

```js
const Markdown = new TailDown({
  a: {
    customClass: "hover:text-blue-500",
    extendStyle: "display: block;",
  },
  h3: {
    customClass: "text-gray-600",
    extendStyle: "display: block;",
  },
});
```
