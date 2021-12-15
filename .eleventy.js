module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: 'src',
      output: '_site'
    },
  };
}