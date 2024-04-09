import { type ExtensionContext, commands, workspace } from 'vscode'
import { createDecorator } from './decorations'
import { getAutocomplate } from './autocomplate'
import { createColorPreview } from './preview'

export function activate(context: ExtensionContext) {
    const preview = commands.registerCommand('chineseColors.preview', () => {
        createColorPreview(context)
    })
    context.subscriptions.push(preview)

    let autocomplate = getAutocomplate()
    context.subscriptions.push(autocomplate)
    createDecorator(context)

    workspace.onDidChangeConfiguration(() => {
        autocomplate.dispose()
        autocomplate = getAutocomplate()
        context.subscriptions.push(autocomplate)
    })
}

export function deactivate(context: ExtensionContext) {
    context.subscriptions.forEach(i => i.dispose())
    return undefined
}
