var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var HtmlWebPackPlugin = require('html-webpack-plugin')

var server = {
  entry: './server/index.ts',
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'server.prod.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
}

var browser = {
  entry: './browser/hydrate.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ]
}

var build = {
  entry: './browser/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './views/index.html'
    })
  ]
}
let configuration = env => {
  console.log(env)
  if (env == 'server_build') {
    return server
  } else if (env == 'client_build') {
    return build
  } else if (env == 'client_public') {
    return browser
  }
}

module.exports = configuration
