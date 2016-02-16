Package.describe({
  name: 'superlumen:meteor-winston-papertrail',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Papertrail transport for winston',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/superlumen/meteor-winston-papertrail',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    "winston-papertrail": "1.0.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('meteor-winston-papertrail.js', 'server');
  api.export('Winston_Papertrail', 'server');
});
