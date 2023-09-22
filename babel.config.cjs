module.exports = {
  presets: [
    "@babel/preset-react",
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
