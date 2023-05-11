const pug = require("pug");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("env", process.env);
  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 3000,
  })
  eleventyConfig.setLibrary("pug", pug);
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy({ "./src/static/*": "./" });
  eleventyConfig.addPassthroughCopy({ "./src/static": "./" });
  eleventyConfig.addFilter("debug", (data) => {
    return JSON.stringify(data, null, 2)
  });

  eleventyConfig.setPugOptions({
    pretty: true,
  })

  return {
    html: true,
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};

