const { eleventyPlugin } = require('vite-plugin-eleventy');

module.exports = {
  plugins: [eleventyPlugin()],
  plugins: [htmlPurge()],
};