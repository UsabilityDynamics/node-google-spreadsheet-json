/**
 * Create Instance.
 *
 * @param settings              {Object}
 * @param settings.id           {String} ID of spreadsheet.
 * @param settings.simplified   {Boolean}
 * @param settings.pollInterval
 * @param callback
 * @returns {GoogleSpreadsheetJSON}
 * @constructor
 */
function GoogleSpreadsheetJSON( settings, callback ) {

  var deepExtend      = require( 'deep-extend' );
  var ObjectSettings  = require( 'object-settings' );
  var ObjectEmitter   = require( 'object-emitter' );

  // Mixin Object Setting methods into MyObject
  ObjectSettings.mixin( this );
  ObjectEmitter.mixin( this );

  // Extend Settings with Defaults.
  this.set( deepExtend( GoogleSpreadsheetJSON.defaults, settings || {} ) );

  // @note Temporary to simulate "ready" event callback.
  setTimeout( function() {

    this.emit( 'ready', null, {
      port: 3050,
      address: 'localhost',
      title: 'My Application'
    });

  }.bind( this ), 1000 );

  // @chainable
  return this;

}

/**
 * Instance Properties.
 *
 */
Object.defineProperties( GoogleSpreadsheetJSON.prototype, {
  refresh: {
    /**
     * Trigger Check for Changes.
     *
     * @method refresh
     * @param callback
     */
    value: function refresh( callback ) {
      this.debug( 'refresh' );

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  debug: {
    /**
     * Debugger
     *
     */
    value: require( 'debug' )( 'google-spreadsheet-json' ),
    enumerable: false,
    configurable: true,
    writable: true
  },
  utility: {
    /**
     * Utility Methods.
     *
     */
    value: require( './common/utility' ),
    enumerable: false,
    configurable: true,
    writable: true
  }
});

/**
 * Constructor Properties.
 *
 */
Object.defineProperties( module.exports = GoogleSpreadsheetJSON, {
  fetch: {
    /**
     * Fetch Spreadsheet.
     *
     * @method fetch
     * @param settings      {Object}
     * @param settings.id   {String} ID of spreadsheet.
     * @param callback
     * @returns {GoogleSpreadsheetJSON}
     */
    value: function fetch( settings, callback ) {
      return new GoogleSpreadsheetJSON( settings, callback );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  subscribe: {
    /**
     * Create Subscription.
     *
     * @method subscribe
     * @param settings              {Object}
     * @param settings.id           {String} ID of spreadsheet.
     * @param settings.simplified   {Boolean}
     * @param settings.pollInterval
     * @param callback
     * @returns {GoogleSpreadsheetJSON}
     */
    value: function subscribe( settings, callback ) {
      return new GoogleSpreadsheetJSON( settings, callback );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  defaults: {
    /**
     * Default Settings.
     *
     */
    value: {
      pollInterval: null,
      simplified: true,
      range: undefined
    },
    enumerable: true,
    configurable: true,
    writable: false
  }
});