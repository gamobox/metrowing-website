import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcsssize from 'postcss-size';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const isDevelopmentMode = process.argv.indexOf('--dev') === 3;

const plugins = isDevelopmentMode ? [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: [__dirname],
      },
    }),
    new ExtractTextPlugin('/assets/css/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ] : [
    new ExtractTextPlugin('/assets/css/style.min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: false,
      output: { comments: false },
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  ];

export default {
  entry: {
    main: [
      './src/scss/_main.scss',
      './src/scripts/main.js',
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  // devtool: isDevelopmentMode ? 'inline-source-map' : false,
  cache: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          comments: false,
          compact: true,
        },
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?minimize!postcss!sass'),
      }, {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader?limit=10000&name=../image/[name].[ext]',
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=../fonts/[name].[ext]',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]',
      }, {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: 'url-loader?name=../fonts/[name].[ext]',
      },

    ],
  },
  resolve: {
    root: path.resolve('src/scripts'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins,
  postcss: [autoprefixer({ browsers: ['last 2 versions'] }), postcsssize],
};
