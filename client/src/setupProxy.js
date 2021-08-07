const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/assspi',
    createProxyMiddleware({
      target: 'http://blocksinfo-server:3001',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
