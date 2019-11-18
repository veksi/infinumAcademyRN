module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      // eslint-disable-next-line global-require
      require('@babel/plugin-proposal-decorators').default,
      {
        legacy: true,
      },
    ],
  ],
};
