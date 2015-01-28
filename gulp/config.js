var dest, src, test, reports, path;

path = require('path');

dest = './dist';
src = './src';
test = './test';
reports = './reports';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  browserify: {
    // A separate bundle will be generated for each bundle config in the list below
    bundleConfigs: [{
      entries: src + '/encoding.js',
      dest: dest,
      template: src + '/_bundleTemplate.js',
      outputName: 'encoding.js',
      require: [],
      external: []
    }]
  },
  production: {
    jsSrc: dest + '/encoding.js',
    dest: dest
  },
  karma: {
    configFile: __dirname + '/../karma.conf.js'
  },
  linter: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  complexity: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  cleaning: {
    dist: dest,
    reports: reports
  }
};
