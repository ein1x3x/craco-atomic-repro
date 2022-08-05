const { CracoAliasPlugin } = require('react-app-alias');

const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),

      '@styles': path.resolve(__dirname, 'src/shared/ui/styles'),

      '@img': path.resolve(__dirname, 'src/shared/ui/assets/images'),

      '@icon': path.resolve(__dirname, 'src/shared/ui/assets/icons')
    }
  },

  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly'
        }
      }
    }
  },

  babel: require('./babel.config.js'),

  plugins: [
    {
      plugin: new CircularDependencyPlugin()
    },

    {
      plugin: CracoAliasPlugin,

      options: {}
    }
  ]
};
