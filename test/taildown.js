class TailDown {
  constructor(data) {
    this.Config = {
      pre: {
        themes: {
          default: {
            tag: "f92672",
            url: "67cdcc",
            comment: "8292a2",
            number: "ae81ff",
            string: "a6e22e",
            function: "e6db74",
            keyword: "66d9ef",
            regex: "fd971f",
            symbol: "f8c555",
            selector: "66d9ef",
            variable: "f8f8f2",
            punctuation: "f8f8f2",
            backgroundColor: "272822",
          },
          night: {
            tag: "e2777a",
            url: "67cdcc",
            string: "7ec699",
            regex: "7ec699",
            comment: "999",
            number: "f08d49",
            keyword: "cc99cd",
            symbol: "f1fa8c",
            function: "ff5555",
            selector: "cc99cd",
            variable: "7ec699",
            punctuation: "ccc",
            backgroundColor: "2d2d2d",
          },
          dracula: {
            regex: "ffb86c",
            tag: "8be9fd",
            url: "67cdcc",
            comment: "999",
            number: "bd93f9",
            symbol: "8be9fd",
            keyword: "bd93f9",
            selector: "cc99cd",
            variable: "be9fd",
            function: "ff5555",
            string: "50fa7b",
            punctuation: "ccc",
            backgroundColor: "282a36",
          },
        },
      },
    };

    this.data = data;
    if (!this.data) this.data = {};
    if (!this.data.i) this.data.i = {};
    if (!this.data.a) this.data.a = {};
    if (!this.data.b) this.data.b = {};
    if (!this.data.h1) this.data.h1 = {};
    if (!this.data.h2) this.data.h2 = {};
    if (!this.data.h3) this.data.h3 = {};
    if (!this.data.h4) this.data.h4 = {};
    if (!this.data.h5) this.data.h5 = {};
    if (!this.data.h6) this.data.h6 = {};
    if (!this.data.pre) this.data.pre = {};
    if (!this.data.img) this.data.img = {};
    this.Style = `<style>code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: 0 0;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"] {
background: #${
      this.Config.pre.themes[this.data.pre.theme || "default"].backgroundColor
    };
}

pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].comment};
}
.token.punctuation {
  color: #${
    this.Config.pre.themes[this.data.pre.theme || "default"].punctuation
  };
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].tag};
}

.token.function,
.token.function-name {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].function};
}
.token.boolean,
.token.number {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].number};
}
.token.class-name,
.token.constant,
.token.property,
.token.symbol {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].symbol};
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].selector};
}
.token.attr-value,
.token.char,
.token.variable {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].variable};
}
.token.regex{
      color: #${this.Config.pre.themes[this.data.pre.theme || "default"].regex};
}
.token.string{
    color: #${this.Config.pre.themes[this.data.pre.theme || "default"].string};
}
.token.entity,
.token.operator,
.token.url {
  color: #${this.Config.pre.themes[this.data.pre.theme || "default"].url};
}
.token.bold,
.token.important {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.token.inserted {
  color: green;
}
pre[data-line] {
  position: relative;
  padding: 1em 0 1em 3em;
}
.line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(24, 20%, 50%, 0.08);
  background: linear-gradient(
    to right,
    hsla(24, 20%, 50%, 0.1) 70%,
    hsla(24, 20%, 50%, 0)
  );
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}
@media print {
  .line-highlight {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
}
.line-highlight:before,
.line-highlight[data-end]:after {
  content: attr(data-start);
  position: absolute;
  top: 0.4em;
  left: 0.6em;
  min-width: 1em;
  padding: 0 0.5em;
  background-color: hsla(24, 20%, 50%, 0.4);
  color: #f4f1ef;
  font: bold 65%/1.5 sans-serif;
  text-align: center;
  vertical-align: 0.3em;
  border-radius: 999px;
  text-shadow: none;
  box-shadow: 0 1px #fff;
}
.line-highlight[data-end]:after {
  content: attr(data-end);
  top: auto;
  bottom: 0.4em;
}
.line-numbers .line-highlight:after,
.line-numbers .line-highlight:before {
  content: none;
}
pre[id].linkable-line-numbers span.line-numbers-rows {
  pointer-events: all;
}
pre[id].linkable-line-numbers span.line-numbers-rows > span:before {
  cursor: pointer;
}
pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
  background-color: rgba(128, 128, 128, 0.2);
}
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}
pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}
.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em;
  letter-spacing: -1px;
  border-right: 1px solid #999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}
.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
div.code-toolbar {
  position: relative;
}
div.code-toolbar > .toolbar {
  position: absolute;
  z-index: 10;
  top: 0.3em;
  right: 0.2em;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
div.code-toolbar:hover > .toolbar {
  opacity: 1;
}
div.code-toolbar:focus-within > .toolbar {
  opacity: 1;
}
div.code-toolbar > .toolbar > .toolbar-item {
  display: inline-block;
}
div.code-toolbar > .toolbar > .toolbar-item > a {
  cursor: pointer;
}
div.code-toolbar > .toolbar > .toolbar-item > button {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
div.code-toolbar > .toolbar > .toolbar-item > a,
div.code-toolbar > .toolbar > .toolbar-item > button,
div.code-toolbar > .toolbar > .toolbar-item > span {
  color: #bbb;
  font-size: 0.8em;
  padding: 0 0.5em;
  background: #f5f2f0;
  background: rgba(224, 224, 224, 0.2);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
}
div.code-toolbar > .toolbar > .toolbar-item > a:focus,
div.code-toolbar > .toolbar > .toolbar-item > a:hover,
div.code-toolbar > .toolbar > .toolbar-item > button:focus,
div.code-toolbar > .toolbar > .toolbar-item > button:hover,
div.code-toolbar > .toolbar > .toolbar-item > span:focus,
div.code-toolbar > .toolbar > .toolbar-item > span:hover {
  color: inherit;
  text-decoration: none;
}
</style>`;
  }
  escape(s) {
    return s.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
  }
  parse(MarkdownText) {
    const HtmlCode = MarkdownText.replace(
      /^# (.*$)/gim,
      `<h1 class="text-6xl ${this.data.h1.customClass || ""} ">$1</h1>`
    )
      .replace(
        /^## (.*$)/gim,
        `<h2 class="text-5xl ${this.data.h2.customClass || ""} ">$1</h2>`
      )
      .replace(
        /^### (.*$)/gim,
        `<h3 class="text-3xl ${this.data.h3.customClass || ""} ">$1</h3>`
      )
      .replace(
        /^#### (.*$)/gim,
        `<h4 class="text-3xl ${this.data.h4.customClass || ""} ">$1</h4>`
      )
      .replace(
        /^##### (.*$)/gim,
        `<h5 class="text-2xl ${this.data.h5.customClass || ""} ">$1</h5>`
      )
      .replace(
        /^###### (.*$)/gim,
        `<h6 class="text-xl ${this.data.h6.customClass || ""} ">$1</h6>`
      )
      .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
      .replace(
        /\*\*(.*)\*\*/gim,
        `<b class="${this.data.b.customClass || ""}">$1</b>`
      )
      .replace(
        /\*(.*)\*/gim,
        `<i class="${this.data.i.customClass || ""}">$1</i>`
      )
      .replace(
        /!\[(.*?)\]\((.*?)\)/gim,
        `<img  class="${this.data.img.customClass || ""}" alt='$1' src='$2' />`
      )
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        `<a href='$2' class="${this.data.a.customClass || ""}">$1</a>`
      )
      .replace(/\n$/gim, "<br/>")
      .replace(
        /^`{3}([\S]+)?\n([\s\S]+)\n`{3}/gim,
        `<pre><code class="language-$1">$2</code></pre>`
      );
    return `${HtmlCode.trim()}\n${this.Style}`;
  }
  highlightAll() {
    Prism.highlightAll();
  }
}
