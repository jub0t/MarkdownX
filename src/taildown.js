class TailDown {
  constructor(data) {
    this.data = data;
    if (!this.data) this.data = {};
    if (!this.data.i) this.data.i = {};
    if (!this.data.a) this.data.a = {};
    if (!this.data.b) this.data.b = {};
    if (!this.data.u) this.data.u = {};
    if (!this.data.h1) this.data.h1 = {};
    if (!this.data.h2) this.data.h2 = {};
    if (!this.data.h3) this.data.h3 = {};
    if (!this.data.h4) this.data.h4 = {};
    if (!this.data.h5) this.data.h5 = {};
    if (!this.data.h6) this.data.h6 = {};
    if (!this.data.li) this.data.li = {};
    if (!this.data.ul) this.data.ul = {};
    if (!this.data.ol) this.data.ol = {};
    if (!this.data.pre) this.data.pre = {};
    if (!this.data.img) this.data.img = {};
    if (!this.data.del) this.data.del = {};
    if (!this.data.code) this.data.code = {};
    if (!this.data.blockquote) this.data.blockquote = {};
    if (!this.data.escapeHTML) this.data.escapeHTML = false;
  }
  format(html) {
    let tab = "\t";
    let result = " ";
    let indent = " ";
    html.split(/>\s*</).forEach(function (element) {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
      result += indent + "<" + element + ">\r\n";
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
        indent += tab;
      }
    });
    return result.substring(1, result.length - 3);
  }
  escape(s, escapeHTML) {
    if (escapeHTML) {
      return s.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
        return "&#" + i.charCodeAt(0) + ";";
      });
    } else {
      return s;
    }
  }
  replaceRegex(regex, replacement) {
    return function (str) {
      return str.replace(regex, replacement);
    };
  }
  parseCodeBlock(data) {
    if (!data.pre) data.pre = {};
    if (!data.code) data.code = {};
    if (!data.pre.customClass) data.pre.customClass = " ";
    if (!data.pre.extendStyle) data.pre.extendStyle = " ";
    if (!data.code.extendStyle) data.code.extendStyle = " ";
    if (!data.code.customClass) data.code.customClass = " ";
    let html = data.string.replace(
      /^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/gim,
      `<pre style="${data.pre.extendStyle}" class=" ${data.pre.customClass} "><code style=" ${data.code.extendStyle} " class="language-$1 ${data.code.customClass} ">$3</code></pre>`
    );
    return html;
  }
  parse(MarkdownText) {
    let HtmlCode = this.escape(MarkdownText, this.data.escapeHTML || false)
      .replace(
        /^# (.*$)/gim,
        `<h1 style="${this.data.h1.extendStyle || " "}" class="text-6xl ${
          this.data.h1.customClass || " "
        } ">$1</h1>`
      )
      .replace(
        /^## (.*$)/gim,
        `<h2 style="${this.data.h2.extendStyle || " "}" class="text-5xl ${
          this.data.h2.customClass || " "
        } ">$1</h2>`
      )
      .replace(
        /^### (.*$)/gim,
        `<h3 style="${this.data.h3.extendStyle || " "}" class="text-3xl ${
          this.data.h3.customClass || " "
        } ">$1</h3>`
      )
      .replace(
        /^#### (.*$)/gim,
        `<h4 style="${this.data.h4.extendStyle || " "}" class="text-2xl ${
          this.data.h4.customClass || " "
        } ">$1</h4>`
      )
      .replace(
        /^##### (.*$)/gim,
        `<h5 style="${this.data.h5.extendStyle || " "}" class="text-xl ${
          this.data.h5.customClass || " "
        } ">$1</h5>`
      )
      .replace(
        /^###### (.*$)/gim,
        `<h6 style="${this.data.h6.extendStyle || " "}" class="text-lg ${
          this.data.h6.customClass || " "
        } ">$1</h6>`
      )
      .replace(
        /^\> (.*$)/gim,
        `<blockquote style="${
          this.data.blockquote.extendStyle || " "
        }" class="${this.data.blockquote.customClass || " "}">$1</blockquote>`
      )
      .replace(
        /\*\*(.*)\*\*/gim,
        `<b style="${this.data.b.extendStyle || " "}" class="${
          this.data.b.customClass || " "
        }">$1</b>`
      )
      .replace(
        /\*(.*)\*/gim,
        `<i style="${this.data.i.extendStyle || " "}" class="${
          this.data.i.customClass || " "
        }">$1</i>`
      )
      .replace(
        /!\[(.*?)\]\((.*?)\)/gim,
        `<img style="${this.data.img.extendStyle || " "}" class="${
          this.data.img.customClass || " "
        }" alt='$1' src='$2' />`
      )
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        `<a style="${this.data.a.extendStyle || " "}" href='$2' ${
          this.data.a.newTab ? "target=_blank" : ""
        } class="${this.data.a.customClass || " "}">$1</a>`
      )
      .replace(/\n$/gim, "<br/>")
      .replace(
        /^\s*\n\*/gm,
        `<ul style="${this.data.ul.extendStyle || " "}" class="list-disc ml-4 ${
          this.data.ul.customClass || " "
        }">\n*`
      )
      .replace(/^(\*.+)\s*\n([^\*])/gm, `$1\n</ul>\n\n$2`)
      .replace(
        /^\*(.+)/gm,
        `<li style="${this.data.li.extendStyle || " "}" class="ml-4 ${
          this.data.li.customClass || " "
        }">$1</li>`
      )
      .replace(
        /^\s*\n\d\./gm,
        `<ol style="${
          this.data.ol.extendStyle || " "
        }" class="list-decimal ml-4 ${this.data.ol.customClass || " "}">\n1.`
      )
      .replace(/^(\d\..+)\s*\n([^\d\.])/gm, "$1\n</ol>\n\n$2")
      .replace(
        /^\d\.(.+)/gm,
        `<li style="${this.data.li.extendStyle || " "}" class="${
          this.data.li.customClass || " "
        }">$1</li>`
      )
      .replace(
        /[\~]{2}([^\~]+)[\~]{2}/g,
        `<del class="line-through ${this.data.del.customClass || " "}" style='${
          this.data.del.extendStyle || " "
        }'>$1</del>`
      )
      .replace(
        /[\-]{2}([^\-]+)[\-]{2}/g,
        `<del style='${this.data.del.extendStyle || " "}' class="line-through ${
          this.data.del.customClass || " "
        }">$1</del>`
      )
      .replace(
        /[\_]{2}([^\_]+)[\_]{2}/g,
        `<span style='${this.data.u.extendStyle || " "}' class="underline ${
          this.data.u.customClass || " "
        }">$1</span>`
      );
    return this.parseCodeBlock({
      string: HtmlCode,
      pre: {
        extendStyle: this.data.pre.extendStyle || " ",
        customClass: this.data.pre.customClass || " ",
      },
      code: {
        extendStyle: this.data.code.extendStyle || " ",
        customClass: this.data.code.customClass || " ",
      },
    });
  }
  highlightAll() {
    Prism.highlightAll();
  }
}
