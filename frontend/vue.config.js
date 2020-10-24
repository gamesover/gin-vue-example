module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9080',
        ws: true,
        changeOrigin: true,
      },
      '^/foo': {
        target: '<other_url>',
      },
    },
  },
}
