// eslint-disable-next-line import/no-extraneous-dependencies


module.exports = {
  transformer: {
    getTransformOptions: async() => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
