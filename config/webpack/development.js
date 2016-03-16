var webpack = require('webpack');
var path    = require('path');
var config  = require('./common');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'src')
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    ENV: JSON.stringify(
      require(path.join(__dirname, '../env', 'development'))
    )
  })
]);

module.exports = config;
