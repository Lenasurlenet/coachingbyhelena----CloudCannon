module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/_includes/");
  eleventyConfig.addWatchTarget('./src/images/');
  eleventyConfig.addWatchTarget('./src/icons/');
  eleventyConfig.addWatchTarget('./src/css/tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');

  eleventyConfig.addPassthroughCopy('./src/_includes/');
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/icons/');

  return {
    
    dir: {
      input: 'src',
      output: '_site'
    },
  };
}