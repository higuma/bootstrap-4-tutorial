const glob = require('glob'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      WWW_PATH = path.join(__dirname, 'site');

function makePugToHtmlPlugins(srcDir, dstDir) {
  return glob.sync(`${srcDir}/*.pug`).map(function(src) {
    return new HtmlWebpackPlugin({
      template: src,
      filename: path.join(dstDir, `${path.basename(src, '.pug')}.html`)
    });
  });
}

module.exports = {
  mode: 'development',    // >= v4 (remove it for <= v3)

  entry: './src/js/dummy.js',
  output: { path: WWW_PATH, filename: './js/dummy.js' },

  module: {
    rules: [{
      test: /.pug$/,
      use: { loader: 'pug-loader', options: { pretty: true } }
    }]
  },

  plugins: makePugToHtmlPlugins('src/pug/en', 'en').concat(
    makePugToHtmlPlugins('src/pug/ja', 'ja'),
    new CopyWebpackPlugin([{ from: 'src/index.html', to: 'index.html' }]),
    new CopyWebpackPlugin([{ from: 'src/js/main.js', to:'js' }]),
    new CopyWebpackPlugin([{ from: 'src/img', to:'img' }])
  ),

  devServer: { contentBase: WWW_PATH, port: 6022 }
};
