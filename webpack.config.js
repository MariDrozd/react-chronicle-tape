const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode,
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      assetModuleFilename: 'assets/[name].[contenthash:8][ext][query]',
      clean: true,
    },

    devtool: isProduction ? false : 'inline-source-map',

    devServer: {
      open: true,
      host: 'localhost',
      port: 4000,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: path.resolve(__dirname, 'public/favicon.svg'),
      }),
      ...(isProduction ? [new MiniCssExtractPlugin()] : []),
    ],

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
        },

        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: !isProduction,
              },
            },
          ],
        },

        {
          test: /\.module\.s[ac]ss$/i,
          include: path.resolve(__dirname, 'src'),
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  localIdentName: isProduction
                    ? '[hash:base64:8]'
                    : '[local]__[hash:base64:4]',
                },
                importLoaders: 1,
                sourceMap: !isProduction,
              },
            },
            { loader: 'sass-loader', options: { sourceMap: !isProduction } },
          ],
        },

        {
          test: /\.s[ac]ss$/i,
          include: path.resolve(__dirname, 'src'),
          exclude: /\.module\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false,
                importLoaders: 1, // ← тоже 1
                sourceMap: !isProduction,
              },
            },
            { loader: 'sass-loader', options: { sourceMap: !isProduction } },
          ],
        },

        {
          test: /\.svg$/i,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              resourceQuery: { not: [/url/] },
              use: [
                {
                  loader: '@svgr/webpack',
                  options: { exportType: 'named', svgo: false },
                },
              ],
              type: 'javascript/auto',
            },
            { type: 'asset/resource' },
          ],
        },

        {
          test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif)$/i,
          type: 'asset',
        },
      ],
    },

    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
  };
};
