# Markdown For Tailwinds

## Install

```
Link Soon
```

## Usage

create the class.

```js
Markdown = new TailDown();
```

To parse, use the `.parse()` function.

```jsW
MarkdownCode = `
# Blog Post
`;
HTML = Markdown.parse(MarkdownCode);
console.log(HTML);
```

If you are using the `<pre>` tag, you can highlight the code by.

```js
Prism.highlightAll();
Markdown.highlightAll();
```

## Config

This is how you can put custom class/style in any tag.

```js
Markdown = new TailDown({
  a: {
    customClass: "hover:text-blue-500",
    extendStyle: "display: block;",
  },
});
```

Code snippet(`<pre>`) themes are in [The theme folder](./styles).
