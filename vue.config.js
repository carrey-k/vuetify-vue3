const path = require('path')

module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  assetsDir: 'public/',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        vuetify: path.resolve(__dirname, 'node_modules/vuetify'),
      },
    },
  },
  chainWebpack: (config) => {
    // prevent webpack preload plugin from adding a prefetch tag to all async chunks
    // config.plugins.delete('prefetch');
    // eslint-disable-next-line no-unused-vars
    config.plugin('VuetifyLoaderPlugin').tap((args) => [
      {
        progressiveImages: true,
      },
      {
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('core-')) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/core/${camelTag.substring(
                4
              )}.vue'`,
            ]
          }
        },
      },
    ])
    config.plugin('html').tap((args) => {
      args[0].title = 'Administration Center'
      return args
    })
    config.plugin('define').tap((args) => {
      let version = JSON.stringify(require('./package.json').version)
      args[0]['process.env']['VERSION'] = version
      return args
    })
  },
}
