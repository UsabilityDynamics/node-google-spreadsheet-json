var express = require( 'express' );
var extend  = require( 'deep-extend' );
var gsJSON  = require( '../' );
var app     = express.call();

// Create GS Subscription with 30-second polling.
gsJSON.subscribe({
  id: '1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU',
  simplify: true,
  sheet: 'Settings',
  pollInterval: 30
}).on( 'updated', updateSettings ).once( 'ready',  startServer );

/**
 * Start Express Server once GS Data is available.
 *
 * @param error
 * @param _settings
 */
function startServer( error, _settings ) {
  console.log( 'startServer' );

  app.listen( _settings.port, _settings.address, function() {
    console.log( this.address() );
  });

}

/**
 * Change Express Settings when GS Updates.
 *
 * @param error
 * @param _settings
 */
function updateSettings( error, _settings ) {
  console.log( 'updateSettings' );

  if( !error ) {
    extend( app.settings, _settings );
  }

}
