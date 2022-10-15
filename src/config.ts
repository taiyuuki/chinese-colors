import { workspace } from 'vscode'

export let config = workspace.getConfiguration()
workspace.onDidChangeConfiguration(() => {
  config = workspace.getConfiguration()
})