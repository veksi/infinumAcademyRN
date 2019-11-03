// webpack.config.js
module.exports = {
  entry: './index.web.js',
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
