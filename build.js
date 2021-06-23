var buildinfo = require("metalsmith-build-info");
var discoverPartials = require('metalsmith-discover-partials')
var layouts = require('metalsmith-layouts');
var markdown = require('@metalsmith/markdown');
var metadata = require("metalsmith-metadata")
var metalsmith = require('metalsmith');
var multiLanguage = require("metalsmith-multi-language")
var permalinks = require('@metalsmith/permalinks');
var registerHelpers = require("metalsmith-register-helpers")
var sass = require('metalsmith-sass');
var static = require('metalsmith-static');

metalsmith(__dirname)
  .clean(true)
  .use(metadata({ global: 'metadata.yml' }))
  .use(static())
  .use(sass({ outputDir: 'css/' }))
  .use(buildinfo())
  .use(markdown())
  .use(multiLanguage({
    default: 'el',
    locales: ['en', 'el']
  }))
  .use(permalinks({
    pattern: ':locale/:page',
    indexFile: 'index.html',
    relative: false,
  }))
  .use(discoverPartials())
  .use(registerHelpers())
  .use(layouts())
  .build((err,files) => {
    if (err) throw err;
    console.log("files",Object.keys(files))
  });

