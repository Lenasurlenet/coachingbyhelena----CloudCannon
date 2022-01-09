module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/_includes/");
  eleventyConfig.addWatchTarget('./src/assets/');
  eleventyConfig.addWatchTarget('./src/css/tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');

  eleventyConfig.addPassthroughCopy('./src/_includes/');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/admin/');
  
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  })

  return {
    
    dir: {
      input: 'src',
      output: '_site'
    },
  };
}