interface AnyMap {
  [key: string]: any;
}

interface TayparserOptionFields extends AnyMap {
  extendStyle?: string;
}

interface TayparserOptions extends AnyMap {
  i?: TayparserOptionFields;
  a?: TayparserOptionFields;
  b?: TayparserOptionFields;
  u?: TayparserOptionFields;
  h1?: TayparserOptionFields;
  h2?: TayparserOptionFields;
  h3?: TayparserOptionFields;
  h4?: TayparserOptionFields;
  h5?: TayparserOptionFields;
  h6?: TayparserOptionFields;
  img?: TayparserOptionFields;
  p?: TayparserOptionFields;
  li?: TayparserOptionFields;
  ol?: TayparserOptionFields;
  ul?: TayparserOptionFields;
  blockquote?: TayparserOptionFields;
  code?: TayparserOptionFields;
  pre?: TayparserOptionFields;
}

class Tayparser {
  private data: TayparserOptions = {};
  private default_data = {
    i: {},
    a: {},
    b: {},
    u: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    img: {},
    p: {},
    li: {},
    ol: {},
    ul: {},
    blockquote: {},
    code: {},
    pre: {},
  };

  constructor(data: any) {
    this.data = data || this.default_data;
  }

  format(html: string) {
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

  escape(s: string, escapeHTML: string) {
    if (escapeHTML) {
      return s.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
        return "&#" + i.charCodeAt(0) + ";";
      });
    } else {
      return s;
    }
  }

  replaceRegex(regex: RegExp, replacement: string) {
    return function (str: string) {
      return str.replace(regex, replacement);
    };
  }

  parseCodeBlock(data: { string: any; pre: any; code: any }) {
    if (!data.pre)
      data.pre = {
        customClass: ``,
        extendStyle: ``,
      };
    if (!data.code)
      data.code = {
        customClass: ``,
        extendStyle: ``,
      };

    if (!data.pre.customClass) data.pre.customClass = " ";
    if (!data.pre.extendStyle) data.pre.extendStyle = " ";
    if (!data.code.extendStyle) data.code.extendStyle = " ";
    if (!data.code.customClass) data.code.customClass = " ";

    const html = data.string.replace(
      /^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/gim,
      `<pre style="${data.pre.extendStyle}" class=" ${data.pre.customClass} "><code style=" ${data.code.extendStyle} " class="language-$1 ${data.code.customClass} ">$3</code></pre>`
    );

    return html;
  }

  parse(MarkdownText: string) {
    const data = this["data"];
    const HtmlCode = this.escape(MarkdownText, data.escapeHTML || false)
      .replace(
        /^# (.*$)/gim,
        `<h1 style="${data.h1?.extendStyle || " "}" class="text-6xl ${
          data.h1?.customClass || " "
        } ">$1</h1>`
      )
      .replace(
        /^## (.*$)/gim,
        `<h2 style="${data.h2?.extendStyle || " "}" class="text-5xl ${
          data.h2?.customClass || " "
        } ">$1</h2>`
      )
      .replace(
        /^### (.*$)/gim,
        `<h3 style="${data.h3?.extendStyle || " "}" class="text-3xl ${
          data.h3?.customClass || " "
        } ">$1</h3>`
      )
      .replace(
        /^#### (.*$)/gim,
        `<h4 style="${data.h4?.extendStyle || " "}" class="text-2xl ${
          data.h4?.customClass || " "
        } ">$1</h4>`
      )
      .replace(
        /^##### (.*$)/gim,
        `<h5 style="${data.h5?.extendStyle || " "}" class="text-xl ${
          data.h5?.customClass || " "
        } ">$1</h5>`
      )
      .replace(
        /^###### (.*$)/gim,
        `<h6 style="${data.h6?.extendStyle || " "}" class="text-lg ${
          data.h6?.customClass || " "
        } ">$1</h6>`
      )
      .replace(
        /^\> (.*$)/gim,
        `<blockquote style="${data.blockquote?.extendStyle || " "}" class="${
          data.blockquote?.customClass || " "
        }">$1</blockquote>`
      )
      .replace(
        /\*\*(.*)\*\*/gim,
        `<b style="${data.b?.extendStyle || " "}" class="${
          data.b?.customClass || " "
        }">$1</b>`
      )
      .replace(
        /\*(.*)\*/gim,
        `<i style="${data.i?.extendStyle || " "}" class="${
          data.i?.customClass || " "
        }">$1</i>`
      )
      .replace(
        /!\[(.*?)\]\((.*?)\)/gim,
        `<img style="${data.img?.extendStyle || " "}" class="${
          data.img?.customClass || " "
        }" alt='$1' src='$2' />`
      )
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        `<a style="${data.a?.extendStyle || " "}" href='$2' ${
          data.a?.newTab ? "target=_blank" : ""
        } class="${data.a?.customClass || " "}">$1</a>`
      )
      .replace(/\n$/gim, "<br/>")
      .replace(
        /^\s*\n\*/gm,
        `<ul style="${data.ul?.extendStyle || " "}" class="list-disc ml-4 ${
          data.ul?.customClass || " "
        }">\n*`
      )
      .replace(/^(\*.+)\s*\n([^\*])/gm, `$1\n</ul>\n\n$2`)
      .replace(
        /^\*(.+)/gm,
        `<li style="${data.li?.extendStyle || " "}" class="ml-4 ${
          data.li?.customClass || " "
        }">$1</li>`
      )
      .replace(
        /^\s*\n\d\./gm,
        `<ol style="${data.ol?.extendStyle || " "}" class="list-decimal ml-4 ${
          data.ol?.customClass || " "
        }">\n1.`
      )
      .replace(/^(\d\..+)\s*\n([^\d\.])/gm, "$1\n</ol>\n\n$2")
      .replace(
        /^\d\.(.+)/gm,
        `<li style="${data.li?.extendStyle || " "}" class="${
          data.li?.customClass || " "
        }">$1</li>`
      )
      .replace(
        /[\~]{2}([^\~]+)[\~]{2}/g,
        `<del class="line-through ${data.del?.customClass || " "}" style='${
          data.del?.extendStyle || " "
        }'>$1</del>`
      )
      .replace(
        /[\-]{2}([^\-]+)[\-]{2}/g,
        `<del style='${data.del?.extendStyle || " "}' class="line-through ${
          data.del?.customClass || " "
        }">$1</del>`
      )
      .replace(
        /[\_]{2}([^\_]+)[\_]{2}/g,
        `<span style='${data.u?.extendStyle || " "}' class="underline ${
          data.u?.customClass || " "
        }">$1</span>`
      );

    return this.parseCodeBlock({
      string: HtmlCode,
      pre: {
        extendStyle: data.pre?.extendStyle || " ",
        customClass: data.pre?.customClass || " ",
      },
      code: {
        extendStyle: data.code?.extendStyle || " ",
        customClass: data.code?.customClass || " ",
      },
    });
  }
}
