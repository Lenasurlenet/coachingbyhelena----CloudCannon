module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/images/');
  eleventyConfig.addWatchTarget('./src/icons/');
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');



  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/icons/');
  eleventyConfig.addPassthroughCopy('./src/css/tailwind.css');

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: 'src',
      output: '_site'
    },
  };
}