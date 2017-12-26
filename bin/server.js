const Koa = require('koa');
const webpack = require('webpack');
const koaWebpackMiddleware = require('koa-webpack-middleware');
const webpackHotMiddleware = require('webpack-dev-middleware');
const path = require('path');
const fs = require('fs');
const config = require(path.resolve(__dirname, '../build/webpack.config'));

const PORT = process.env.PORT || 3000;

const app = new Koa();
const compiler = webpack(config);

app.use(koaWebpackMiddleware.devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
  hot: true,
}));

app.use(koaWebpackMiddleware.hotMiddleware(compiler));

app.use(async (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.readFileSync(path.resolve(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`Dev Server hosting on port: "${PORT}"`);
});
