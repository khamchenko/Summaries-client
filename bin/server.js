const Koa = require('koa');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack-middleware');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const app = new Koa();
const config = require('../build/webpack.config');
const indexHtmlPath = path.resolve(__dirname, './index.html');
const compiler = webpack(config);
const webpackMiddleware = koaWebpack.devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
});

app.use(webpackMiddleware);
app.use((ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.readFileSync(indexHtmlPath);
});

app.listen(PORT, function () {
  console.log(`Dev Server port: "${PORT}"`);
});