const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    port: 8083,
    allowedHosts: 'all' // TODO
  },
  output: {
    publicPath: 'http://localhost:8000/todoListComponent/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'todo_list',
        filename:
          'remoteEntry.js',
        exposes: {
          './Button': './src/components/Button',
          './TodoList': './src/components/TodoList',
          './Todo': './src/components/Todo',
          './TodoEdit': './src/components/TodoEdit',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom']
          }
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};