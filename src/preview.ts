import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Uri, window } from 'vscode'
import type { ExtensionContext, WebviewPanel } from 'vscode'

function getHtml(extentionPath: string, panel: WebviewPanel) {
    const reg = /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g
    let html = readFileSync(join(extentionPath, 'res/webview/index.html'), 'utf-8')
    let match = reg.exec(html)
    while (match) {
        html = html.replace(match[2], panel.webview.asWebviewUri(Uri.file(join(extentionPath, `res/webview/${match[2]}`))).toString())
        match = reg.exec(html)
    }

    return html
}

let isDisposed = true
let panel: WebviewPanel

function createColorPreview(context: ExtensionContext) {
    if (isDisposed) {
        panel = window.createWebviewPanel(
            'ColorPreview',
            '国色',
            {
                preserveFocus: true,
                viewColumn: 2,
            },
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [Uri.file(join(context.extensionPath, 'res'))],
            },
        )
        panel.onDidDispose(() => {
            isDisposed = true
        })
        panel.webview.html = getHtml(context.extensionPath, panel)
        panel.iconPath = Uri.file(context.asAbsolutePath('res/chinese-colors.svg'))

        isDisposed = false
    }
    else {
        panel.reveal()
    }
}

export { createColorPreview }
