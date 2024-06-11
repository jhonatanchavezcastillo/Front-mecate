const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: 'https://mecate-api.onrender.com',//http://127.0.0.1:8000
      changeOrigin: true,
      pathFilter: '/api',
    })
  );
};
