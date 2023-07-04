import { createProxyMiddleware } from 'http-proxy-middleware';

const proxyMiddleware = createProxyMiddleware({
    target: 'http://localhost:3012',
    changeOrigin: true,
  });
  
module.exports = function (app: any) {
    app.use('/api', proxyMiddleware);
  }