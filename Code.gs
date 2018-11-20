function clearConditionalFormatRules() {
  //Does one sheet at a time (whatever sheet is active/has focus)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearConditionalFormatRules();
  
}
