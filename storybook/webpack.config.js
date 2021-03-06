const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    exclude: path.resolve(__dirname, '../node_modules'),
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias.push({'react-native$': 'react-native-web'});

  return config;
};
