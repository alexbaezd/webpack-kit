const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/app.bundle.[contenthash].js'
  },
  devtool: 'source-map'
  ,
  devServer: {
    open: 'Google Chrome'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'resolve-url-loader'},
          {
            loader: 'sass-loader',
            options: {sourceMap:true}
          }
        ]
      },{
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          { loader: 'image-webpack-loader?bypassOnDebug'}
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
          template:"./src/template.html",
          minify:{
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          },
          filename:"./index.html"
      })
  ]
}
