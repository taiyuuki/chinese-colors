import type { ExtensionContext } from 'vscode'
import { createDecorator } from './decorations'
import { autocomplate } from './autocomplate'
import { createColorPreview } from './preview'

export function activate(context: ExtensionContext) {
    createDecorator(context)
    createColorPreview(context)
    context.subscriptions.push(autocomplate)
}

export function deactivate(context: ExtensionContext) {
    context.subscriptions.forEach(i => i.dispose())
    return undefined
}
