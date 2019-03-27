function doPost(request) {
  var sheets = SpreadsheetApp.openById('<google-sheet-id-from-url>');
  var params = request.parameters;
  var nR = getNextRow(sheets) + 1;

  if (params.token == "<webhook-token>") {

    // PROCESS TEXT FROM MESSAGE
    var textRaw = String(params.text).replace(/^\s*!boteater\s*:*\s*/gi,'');
    var text = textRaw.split(/\s*;\s*/g);

    // FALL BACK TO DEFAULT TEXT IF NO UPDATE PROVIDED
    var account   = text[0] || "Null no account name specified";

    // RECORD TIMESTAMP AND USER NAME IN SPREADSHEET
    sheets.getRangeByName('timestamp').getCell(nR,1).setValue(new Date());
    sheets.getRangeByName('user').getCell(nR,1).setValue(params.user_name);

    // RECORD UPDATE INFORMATION INTO SPREADSHEET
    sheets.getRangeByName('account').getCell(nR,1).setValue(account);
  
    var channel = "general";

    postResponse(channel,params.channel_name,account,params.user_name);

  } else {
    return;
  }
}

function getNextRow(sheets) {
  var timestamps = sheets.getRangeByName("timestamp").getValues();
  for (i in timestamps) {
    if(timestamps[i][0] == "") {
      return Number(i);
      break;
    }
  }
}
