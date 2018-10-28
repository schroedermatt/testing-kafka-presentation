const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: require(path.join(process.cwd(), 'postcss.config'))
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)/,
        use: ['url-loader']
      }
    ]
  }
}
