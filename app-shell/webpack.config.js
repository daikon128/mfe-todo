const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {dependencies: deps} = require("./package.json");
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  output: {
    publicPath: 'http://localhost:8082/'
  },
  module: {
    rules: [
      {
        /* The following line to ask babel
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel.
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'host',
        filename:
          'remoteEntry.js',
        remotes: {
          todo_list:
            'todo_list@http://localhost:8083/remoteEntry.js',
          gadget:
            'gadget@http://localhost:8084/remoteEntry.js'
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