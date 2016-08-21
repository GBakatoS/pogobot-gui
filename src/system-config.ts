"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'socket.io-client': 'vendor/socket.io-client',
  '@angular2-material': 'vendor/@angular2-material',
  'angular2-moment': 'vendor/angular2-moment',
  'moment': 'vendor/moment/moment.js',
  'angular2-google-maps': 'vendor/angular2-google-maps',
  'angular2-data-table': 'vendor/angular2-data-table/release',
};

/** User packages configuration. */
let packages: any = {
  'socket.io-client': { main: 'socket.io.js' },
  'angular2-moment': { main: 'index.js' },
  'angular2-google-maps/core': {
    defaultExtension: 'js',
    main: 'index.js' // you can also use core.umd.js here, if you want faster loads
  },
  'vendor/angular2-data-table/release': {
    defaultExtension: 'js',
    main: 'angular2-data-table.cjs.js'
  }
};

// put the names of any of your Material components here
const materialComponents: string[] = [
  'core',
  'button',
  'card',
  'checkbox',
  'sidebar',
  'icon',
  'toolbar',
  'list'
];

materialComponents.forEach(name => {
  packages[`@angular2-material/${name}`] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: `${name}.js`,
  };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/log',
  'app/pokebank',
  'app/map',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
