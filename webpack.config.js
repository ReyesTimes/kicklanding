const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-es2015']
                    }
                }
            },
            {
              test: /\.styl$/,
              use: ExtractTextPlugin.extract({
                use: [
                  "css-loader",
                  {
                    loader: 'stylus-loader',
                    options: { minimize: true }
                  }
                ]
              })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin("css/[name].css"),
    ]
};
