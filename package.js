Package.describe({
  name: '3stack:country-codes',
  version: '0.1.1',
  summary: 'ISO 3166-1 alpha-2 country code list. Has lookup & select ui.',
  git: 'https://github.com/3stack-software/meteor-country-code-list-iso3166',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@0.9.2');

  api.export('CountryCodes');

  api.use('underscore');
  api.addFiles(['country-codes.js', 'country-code-common.js']);

  api.use([
    'blaze',
    'spacebars',
    'templating'
  ], 'client');
  api.addFiles([
    'country-code-ui.html',
    'country-code-ui.js'
  ], 'client');

});
