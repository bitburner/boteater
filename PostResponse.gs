function postResponse(channel, srcChannel, account, userName) {

  var payload = {
    "channel": "#boteater",
    "username": "BOT EATER 2.0",
    "icon_emoji": ":boteater:",
    "link_names": 1,
    "attachments":[
       {
          "fallback": "This is an update from a Slackbot integrated into your organization. Your client chose not to show the attachment.",
    "pretext": ":white_check_mark: This suspected twitter bot: http://www.twitteraccountsdetails.com/" + account + " was submitted to BOT EATER 2.0 by @" + userName + " in #" + srcChannel + ")",
          "mrkdwn_in": ["pretext"],
          "color": "#D00000"
       }
    ]
  };

  var url = '<webhook-slack-inbound-url>';
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url,options);
}