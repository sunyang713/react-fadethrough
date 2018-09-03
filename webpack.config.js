const { resolve } = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {

  context: resolve('src'),

  entry: {
    'react-fadethrough': 'Fadethrough',
    'react-fadethrough.min': 'Fadethrough'
  },

  output: {
    filename: '[name].js',
    path: process.env.BUILD_PATH && resolve(process.env.BUILD_PATH),
    // publicPath: process.env.PUBLIC_PATH,
    library: 'ReactFadethrough',
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [ 'env', 'react' ]
      },
      exclude: /node_modules/
    }]
  },

  resolve: {
    modules: [ 'src', 'node_modules' ]
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
    // 'react': {
    //   root: 'React',
    //   commonjs2: 'react',
    //   commonjs: 'react',
    //   amd: 'react'
    // },
    // 'react-dom': {
    //   root: 'ReactDOM',
    //   commonjs2: 'react-dom',
    //   commonjs: 'react-dom',
    //   amd: 'react-dom'
    // }
  },

  plugins: [

    // Inject environment variables.
    new webpack.EnvironmentPlugin({
      NODE_ENV: null
    }),

    // Minimize
    new UglifyJsPlugin({
      include: /\.min\.js$/
    })

  ]

}
