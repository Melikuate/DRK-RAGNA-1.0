//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "melikuate7002@gmail.com";
global.location = "Cameroun, Douala";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb5UUROBqbrCZdBjHv2z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb5UUROBqbrCZdBjHv2z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/23774201235 , https://wa.me/237674201235";
global.sudo = process.env.SUDO || "237674201235";
global.owner = process.env.OWNER_NUMBER || "𝟮𝟯𝟳672264390";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUV3WHNPT3NDOVBuL3VUcE4wV2tDcVdLU1lqaVh2WjkzVW5FMW1tUGYxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHhrRWVTUC8wWVRFTU1UL0hPU3hhZDFnbGhnc09zTFg2NmhxUWNqelZYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRG50eVhUbStCNWs1aE9FNVErZ0t4emM2OHV3eXI1Vkh0TXdVZThzc0hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0M0tuTTFQZWRhd3htUUFncDgrUzI2VVNUWE9CdGhSamtVa3RxQURHSmp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNcEFmemNodmxIK0tkK2g3T2ZpTG5wZ0wvMGVXVTBaWi9HSHJEUzgwWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVVWTVKckZxaG9UclhXb0ZRYmJNdTRRZDYvUWtMVXQyL3dsUEE2dWFLV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05xMFJLUWpEclphVWcvV3lxcitIRmxPVmV3QmwwZmhlcVVrM1VubVZtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDBhOXRWeEtMMm8vVWJzeHdMZmhuaHl4QzF1alhUdEJhTTFvUURLcWRBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzRUlWelJ1cGdUdWNySDJsblplQnd6dDJmTGpCWlFRbFZ2VVo0N3MvUUFjY1JJT3p0RmFlV3p6SUp4YWIzRi9CcmE5T3lvM2RMM1NNNkpnUC9TZUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6ImhtdnBuVjA5RXNyRksxdnFOY3JndFIraUJ4RWpJSlY5SDVBU3dKQlplV0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3NjcyMjY0MzkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlCQTcxRERCNTE2Q0MyQTg1NTEwNDNBNkQwRDA4RkU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM1NzY5MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3MjI2NDM5MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRDAyQjZBMkNGN0RDRUQ5NzZCRDAyMDBEMDcyODVEOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzNTc2OTM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NzIyNjQzOTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUNCMjM4MjVFNUVCNzJBMjZDQ0ZFQjRGOTEyQzNEM0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MzU3NjkzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3NjcyMjY0MzkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyRDEyMjhDMTczMUFFMDdERDU0REJDQTVGODkxRDg1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM1NzY5Mzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpnOU54SzFyU0FheHhIN0xPQ05rZFEiLCJwaG9uZUlkIjoiOWU4ODQ1MGMtMGFkMy00YjkzLWI1YTMtMDg2YjQ2N2FlNTc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5MUEViSVpOUUFoNHQ5L0c2ME9hK1V4eG5OZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcWVESVVPc2Z0V3dhd2dpd3d6aUNjSk1adDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV05QUFo4U1kiLCJtZSI6eyJpZCI6IjIzNzY3MjI2NDM5MDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRyIFN0b25lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNlZnS0FIRU5tK3M3OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvNVMxVVYzNGRsN2U0Q1IrelduSmlIcTRheVprbmgybUtaQlJjdGpxenc4PSIsImFjY291bnRTaWduYXR1cmUiOiJ2SGZZd1BVQUlIMWtrT3Z2YTd5akt2MjFtQ2lSNG1MSFQ5bjJQeW5Wdmw0UEhCdnJNektibUVxa0k0aG5wZkVMV21adEhuN1p4ZXZqOFFWN3pDekdDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRmF4T2JGZTczbVZTQk9pMHR1dzVGVzRkNDE0c3JpUHB3NHQ5R2czeFFXaWtWYmpRM1JlMkRjT20xNWJRdmlXWkZrWmp0TCtkZE82Y1pVbjFhNExtQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzIyNjQzOTA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhT1V0VkZkK0haZTN1QWtmczFweVloNnVHc21aSjRkcGltUVVYTFk2czhQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzNTc2OTM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNXdyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "👑",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝗹𝗲 𝗹𝗼𝘂𝗰𝗵𝗲`",
  author: process.env.PACK_AUTHER || " 𝗷𝗼𝘆-𝗯𝗼𝘆",
  packname: process.env.PACK_NAME || "𝗝𝗢𝗬-𝗕𝗢𝗬",
  botname: process.env.BOT_NAME || "𝗗𝗥 𝗦𝗧𝗢𝗡𝗘 𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 𝗗𝗿༒𝗦𝗧𝗢𝗡𝗘🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
