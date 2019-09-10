import pug from 'rollup-plugin-pug';
import sass from 'rollup-plugin-sass';
import vue from 'rollup-plugin-vue';

export default {
    input: 'src/index.js',
    name: 'ContextMenuPlugin',
    globals: {
        'vue': 'Vue'
    },
    plugins: [
        pug({
            pugRuntime: false
        }),
        sass({
            insert: true
        }),
        vue()
    ]
}
