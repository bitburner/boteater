## BotEater 2.0

Boteater is a Webhooks based slackbot that lets you submit twitter account names to a preformatted spreadsheet for later analysis.

## Requirements
-	Google Sheets Access
-	Slack Admin Access
## How to install
-	Setup Slack Incoming and Outgoing Webhooks Integrations
-	We need the Webhook URL from Incoming WebHooks for PostResponse.gs script
-	Configure other Incoming Webhook settings as needed (icon for bot etc)
-	In Outgoing WebHooks we need two things first we need the “Token” for the code.gs script
-	We will later publish our Google Sheet as a web app and use the URL here under URL(s)
-	Create a blank Google Sheet. Add columns called “timestamp”, “user” and “account”. You can add other columns with whatever formulas to fill out your data for the research you want. I’ve used ArrayFormula to fill in whole twitter address as a link etc. Here are some examples where “account” will be the submitted twitter account name in column C:

=ArrayFormula(if(ISBLANK(C2:C),,"https://twitter.com/" & C2:C))

=ArrayFormula(if(ISBLANK(C2:C),,"http://www.twitteraccountsdetails.com/" & C2:C))

=ArrayFormula(if(ISBLANK(C2:C),,"https://www.google.com/search?q=site%3Atwitter.com+-inurl%3Astatus+" & C2:C))

-	In your google sheet in the “tools” menu choose “Script editor” and create two scripts “Code.gs” and “PostResponse.gs”. Paste the code from same source here and save.
-	Now you can fill in “token” from WebHooks settings in slack.
-	The SpreadsheetApp.openById is in your google sheets URL between /d/ and /edit
-	In PostResponse.gs you can add the URL from Incoming Webhooks settings in slack.
-	Now you can “publish” the webapp to be used with your webhooks in slack.
-	Go to “publish” menu and “Deploy as web app...” save the URL to the web app as we will need to put that in IncomingWebhooks settings in slack
-	One you have this published and your webhooks setup it should be working. If you have problems check the permissions on the app (should be open to everyone) and make sure the settings in the script are pointing to proper channels in your slack with “var channel general” in code.gs
