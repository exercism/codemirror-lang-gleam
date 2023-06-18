import { parser } from "./lezer/parser.js"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { styleTags, tags as t } from "@codemirror/highlight"

export const lezerParser = parser;

export const gleamLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "Comment": t.comment,
        "Number Decimal Hex Octal Binary Float": t.number,
        "String": t.string,
        "UppercaseName": t.typeName,
        "Keyword": t.keyword,
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", '"'] },
    commentTokens: { line: "//" },
  }
})

export function gleam(config = {}) {
  let lang = gleamLanguage
  return new LanguageSupport(lang, gleamLanguage.data.of({}))
}
