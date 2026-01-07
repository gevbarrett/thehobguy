// import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({ stage: 0, })
    // purgeCSSPlugin({
    //   content: ['./**/*.html']
    // })
  ]
};

// const postcssPresetEnv = require("postcss-preset-env");

// module.exports = {
//   plugins: [
//     postcssPresetEnv({
//       stage: 0,
//     }),
//   ],
// };
