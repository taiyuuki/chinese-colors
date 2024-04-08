import antfu from '@antfu/eslint-config'
import { tyk_eslint } from '@taiyuuki/eslint-config'

const config = new Promise((resolve) => {
    antfu(tyk_eslint({
        typescript: true,
        rules: {
            'no-new-func': 'off',
            'curly': 'off',
        },
    })).then((v) => {
        resolve([...v, {
            ignores: [
                '**/node_modules',
                '**/dist',
                '**/docs',
                '**/etc',
                '**/temp',
                '**/test',
                '**/res',
            ],
        }])
    })
})

export default config
