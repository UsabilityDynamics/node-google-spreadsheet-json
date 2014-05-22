var GoogleSpreadsheetJSON = require( '../' );

var instance = GoogleSpreadsheetJSON.subscribe({
  id: '1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU',
  simplify: true,
  sheet: 'Sheet1',
  pollInterval: 30
});

instance.on( 'updated', console.log );
instance.on( 'ready',   console.log );
instance.on( 'error',   console.error );


