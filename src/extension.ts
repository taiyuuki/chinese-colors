import type { ExtensionContext } from 'vscode'
import { createDecorator } from './decorations'
import { autocomplate } from './autocomplate'

export function activate(context: ExtensionContext) {
  createDecorator(context)
  context.subscriptions.push(autocomplate)
}

export function deactivate(context: ExtensionContext) {
  context.subscriptions.forEach(i => i.dispose())
  return undefined
}