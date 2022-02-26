class TailDown {
  constructor(data) {
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
    if (!this.data.code) this.data.code = {};
  }
  escape(s) {
    return s.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
  }
  parse(MarkdownText) {
    const HtmlCode = MarkdownText.replace(
      /^# (.*$)/gim,
      `<h1 style="${this.data.h1.customClass || ""} " class="text-6xl ${
        this.data.h1.customClass || ""
      } ">$1</h1>`
    )
      .replace(
        /^## (.*$)/gim,
        `<h2 style="${this.data.h2.customClass || ""}" class="text-5xl ${
          this.data.h2.customClass || ""
        } ">$1</h2>`
      )
      .replace(
        /^### (.*$)/gim,
        `<h3 style="${this.data.h3.customClass || ""}" class="text-3xl ${
          this.data.h3.customClass || ""
        } ">$1</h3>`
      )
      .replace(
        /^#### (.*$)/gim,
        `<h4 style="${this.data.h4.customClass || ""}" class="text-2xl ${
          this.data.h4.customClass || ""
        } ">$1</h4>`
      )
      .replace(
        /^##### (.*$)/gim,
        `<h5 style="${this.data.h5.customClass || ""}" class="text-xl ${
          this.data.h5.customClass || ""
        } ">$1</h5>`
      )
      .replace(
        /^###### (.*$)/gim,
        `<h6 style="${this.data.h6.customClass || ""}" class="text-lg ${
          this.data.h6.customClass || ""
        } ">$1</h6>`
      )
      .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
      .replace(
        /\*\*(.*)\*\*/gim,
        `<b style="${this.data.b.customClass || ""}" class="${
          this.data.b.customClass || ""
        }">$1</b>`
      )
      .replace(
        /\*(.*)\*/gim,
        `<i style="${this.data.i.customClass || ""}" class="${
          this.data.i.customClass || ""
        }">$1</i>`
      )
      .replace(
        /!\[(.*?)\]\((.*?)\)/gim,
        `<img style="${this.data.img.customClass || ""}" class="${
          this.data.img.customClass || ""
        }" alt='$1' src='$2' />`
      )
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        `<a style="${this.data.a.customClass || ""}" href='$2' class="${
          this.data.a.customClass || ""
        }">$1</a>`
      )
      .replace(/\n$/gim, "<br/>")
      .replace(
        /^`{3}([\S]+)?\n([\s\S]+)\n`{3}/gim,
        `<pre style="${this.data.pre.customClass || ""}"><code style="${
          this.data.code.customClass || ""
        }" class="language-$1">$2</code></pre>`
      );
    return `${HtmlCode.trim().replace("  ", " ").trim()}`;
  }
  highlightAll() {
    Prism.highlightAll();
  }
}
