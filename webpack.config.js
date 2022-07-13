const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    // development mode tells it to stop minifying
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        // match the output path
        static: {
          directory: path.resolve(__dirname, 'dist'),
          // match the output 'publicPath'
          publicPath: '/',
        },
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
          '*': {
            target: 'http://localhost:3000/',
            secure: false,
            changeOrigin: true
          },
        },
      },
    module: {
    rules: [
        {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        },
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|jpe?g|svg|gif)?$/,
        use: 'url-loader',
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader'
      }
    ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.resolve(__dirname, './index.html'),
          filename: 'index.html',
        }),
      ],
}
  
  