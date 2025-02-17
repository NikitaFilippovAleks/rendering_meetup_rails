const path = require('path');
const webpack = require('webpack');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: argv.mode || 'production',
    devtool: 'source-map',
    context: __dirname,
    entry: { 
      application: './app/frontend/application.tsx'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
          generator: { filename: 'images/[name]-[hash].digested[ext][query]' }
        },
        {
          test: /\.svg$/i,
          use: [{
            loader: '@svgr/webpack',
            options: { svgo: false }
          }]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[name]-[hash].digested[ext][query]' }
        }
      ]
    },
    output: {
      filename: '[name].js',
      sourceMapFilename: '[file].js.map',
      path: path.resolve(__dirname, 'app/assets/builds')
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  };
};
