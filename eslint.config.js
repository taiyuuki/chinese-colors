import tyk_eslint from '@taiyuuki/eslint-config'

export default tyk_eslint({
    ts: true,
    vue: true,
    ignores: [
        '**/docs',
        '**/etc',
        '**/temp',
        '**/test',
        '**/res',
    ],
})
