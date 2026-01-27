
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import { DateTime } from "luxon";


export default async function(eleventyConfig) {

     /** Converts the given date string to ISO8601 format. */
    const toISOString = (dateString) => new Date(dateString).toISOString();
    eleventyConfig.addFilter('toISOString', toISOString);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Import prior to `module.exports` within `.eleventy.js`
    // const { DateTime } = require("luxon");


    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addWatchTarget("./src/images/");
    eleventyConfig.addWatchTarget("./src/fonts/");
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/sass/");
    eleventyConfig.addWatchTarget("./public/");
    eleventyConfig.addPassthroughCopy("./public/");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
	  eleventyConfig.addPlugin(EleventyVitePlugin);


    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
          return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
      });


    return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
            data: '_data'
        },
    };
}