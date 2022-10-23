module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => { config.plugin('html').tap(args => { args[0].title = 'Research Money'; return args; }); },
  configureWebpack: config => {
    
    if (process.env.NODE_ENV === 'production') {
        config.mode = 'production';
                     // Package file size configuration
        config.performance = {
          maxEntrypointSize: 10000000,
          maxAssetSize: 30000000
        }
    }
  },
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://93.188.164.90:3001/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
}
