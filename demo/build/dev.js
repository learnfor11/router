const { staticDir, base, absPath } = require('./base')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: absPath(staticDir),
    historyApiFallback: true
  }
}
