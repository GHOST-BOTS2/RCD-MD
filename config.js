//GHOST code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RyQ3dvWmpXczYyYUlGRnJENXpueld2ZlIyS1Fmd2YwTjJldk8zZmcxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVcvY3JORnBMbEZSSndwVnd3UUdJcUI5Y00wS2Z5RnhsQ2ZvQ1hlaFFEZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUHl6QTFHN2RCL2hhcitZU3dmZWY5Y1g0RG96NTczRldJSFREcmlleUdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvaGc4MTdqTHY5RkQxRTl0eVZnNGJwSEthU0pWVnJFU3hLSTdtbXFOelFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJMzNqajV4c2U3QTZQblRUTzNLQ3VVMXdidkp2OG5rKyt0WDE2T0ZHbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBCNFloUDNWWGE2WG45SGJzYmtZNDRtYnhoQStiTGU2S2xjM0lYSWI4MVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lsL0Vod0M1UVBNeUN6d2dRUDVLUWpUK0M5NjkwYVFiNkx6QXE4dXgzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnBkclh4MjdIVnp1b1JNa3FTRWgzZHUrTkp3eXU4bDllaGFKQjVCbmxIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9seUVrMFdxZDNxQm1nd1VWTWNBeVZqNlFhbTlEU0RqRUF2MmVqdHdUU252am8xWWdybklUS0diRXhucWJtUVZCVXlOTzV2VDNiSUhqY1VqQWpaRGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJGZU9QSnRlcC9CQkdYWlc2aHNFSVVGWnhjbzRvR3YrSUpCa0NoVGlTVFFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZbUlVNXNIMFRuaVd0Vm9JQktXbjJ3IiwicGhvbmVJZCI6Ijk2ZmVhODMyLWQyZTctNDgzOS05ZDY3LTVlMGRkMWI4NzhiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyb29La0RlRmVnUUpWMHk0K3J1ZG81cVpVRkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjVrdjB3dVZhcGsxdlZaWk1ialFHTDBQNkFvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNTSzlRNVhKIiwibWUiOnsiaWQiOiI5NDc0MTE0MDYyMDo3N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDzZ9ZzZ9CzZ9FzZ9SzZ8gR82fSM2fT82fU82fVM2fIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3FpOElCRU0zTnVic0dHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveGhDQit3ZXRaZ3pkeWhGK0JpWktheFV2WFRoS3NldVlBNTF3Ujl2UFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJzcUlrSmpieFBhcDM0RU0yeVBPdFlzZWJCR1RSWVBrdDFnVlZ3UHd1UkU0MjFxU0NUNk81cjVSWWo5VGZuWkRzQ1lXa2tTN0xnVmlnRnhzbFJ6TVhEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieHpxOVNDOXpHdEtVRnBzVjRWc1kwaXQ4TkNMTmxRNytlR2JxRnI1Z09IaS82cXRYNitiMFYwTFo0dmI3dTRpNC9HRjd5ZjJpT2xuUkZPVlNTbG9Eamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTE0MDYyMDo3N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOFlRZ2ZzSHJXWU0zY29SZmdZbVNtc1ZMMTA0U3JIcm1BT2RjRWZiejFIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1Mjg4NTM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5UTSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94741140620";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://files.catbox.moe/41sdu1.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`GHOST-MD`",
  author: process.env.PACK_AUTHER || "GHOST-MD",
  packname: process.env.PACK_NAME || "GHOST",
  botname: process.env.BOT_NAME || "GHOST-MD",
  ownername: process.env.OWNER_NAME || "GHOST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaobbRhG8l5Mmhh2IA3O";
global.website = process.env.GURL || "https://chat.whatsapp.com/DhCdan60qzH0yoIxmybU3i";
global.devs = "94741140620";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
