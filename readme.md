## Concepts
- Fetch Google Spreadsheet data in simplified JSON format.
- Subscribe to Spreadsheet changes with basic polling.

## Usage

```js
// Fetch Spreadsheet and Convert to Simple JSON Object.
GoogleSpreadsheetJSON.fetch({
  id: '1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU',
  sheet: 'Sheet1',
  simplify: true
}).once( 'ready', console.log );

// Check for Changes every 30 Seconds.
GoogleSpreadsheetJSON.subscribe({
  id: '1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU',
  sheet: 'Sheet1',
  pollInterval: 30,
  simplify: true
}).once( 'ready', console.log ).on( 'update', console.log );
```

## Methods
- subscribe()
- fetch()

## Events
- ready
- error
- updated

## Notes
- https://docs.google.com/spreadsheets/d/1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU/pubhtml
- https://docs.google.com/spreadsheets/d/1HrBGlicSRMCHwHwvex0xSW5T3uXdwsQ9wwU-NgINouU/pubhtml