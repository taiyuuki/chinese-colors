import { languages } from 'vscode'
import type { TextDocument, Position, CancellationToken } from 'vscode'
import { colorsCompletion } from './parse'

// 支持的语言列表
const languageList: string[] = [
  'erb',
  'haml',
  'hbs',
  'html',
  'css',
  'javascript',
  'javascriptreact',
  'markdown',
  'ejs',
  'php',
  'svelte',
  'typescript',
  'typescriptreact',
  'vue-html',
  'vue',
  'sass',
  'scss',
  'less',
  'stylus',
]

// 忽略
function findPound(text: string, position: number): boolean {
  let count = 7
  while (count >= 0 && position >= 0) {
    if (text[position] === '#') {
      return true
    }
    count--
    position--
  }
  return false
}

export const autocomplate = languages.registerCompletionItemProvider(
  languageList,
  {
    provideCompletionItems(
      document: TextDocument,
      position: Position,
      token: CancellationToken
    ) {
      const linePrefix = document.lineAt(position).text.toLowerCase()
      if (!findPound(linePrefix, position.character)) {
        token.isCancellationRequested = true
      }
      return colorsCompletion
    },
  },
  '#',
)