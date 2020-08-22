const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {

  entry: './src/Index',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://localhost:5001',
        secure: false
      }
    }
  },

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({})
    ],
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
