const { resolve } = require('path')

module.exports = {
  "stories": [
    '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "storybook-addon-themes",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "features": {
    // 支持分包编译
    storyStoreV7: true
  },
  "framework": "@storybook/react",
  // "core": {
  //   "builder": "@storybook/builder-webpack5"
  // },
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': resolve(__dirname, '../src/')
    }

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'postcss-loader'
    //     }
    //   ]
    // })

    return config
  }
}