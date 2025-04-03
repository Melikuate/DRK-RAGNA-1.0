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
global.location = "Cameroun, douala ";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb5UUROBqbrCZdBjHv2z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb5UUROBqbrCZdBjHv2z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/237674201235 , https://wa.me/237674201235";
global.sudo = process.env.SUDO || "237674201235";
global.owner = process.env.OWNER_NUMBER || "237674201235";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU11TStoTEJGTkFIdUFEUjFEcmV5QmF5QkFRRlVmSDR1QjBjU2JMKzNYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmVqSTMrV256dDljNC91WlY2VmhIOSs4WEpLVklub0RPUHk2ZmJrZmpVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUFk5WEtiMzVlbTBoSFlheVY1c3FXeGxzK1JqQVA5cnM4dm9aSkJrbUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkTWF5cDlvUWFlMlVya0ZCMUp2MWZrZytoZDdwRjBDUFlLZmFORFNoUkdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKSUdRbGZkZ0xWeHpqb0RWc1NGaVlMeUwvV0NYeitEcno5cUdxdW1ZbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRyVXV6M1duS0FhbFJjV2tzQ0lSc1ZoOHlicHRXRDBEYk9nNU41MmVpaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0YzL2dINUx3THB4SHJLYmxlNlhYaVhtUkZKR0hvelpKWkptdmFhYytrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGZpSTRaOVhRMkFodjJQck5rL1ZCNjIzOEVkeUpiOWYvY2JKRXRpSnIxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRDWWwrZVczdWZ1QzhFbEdsbmVIelV3K2pmNE9yc0ZyS0kzUkdTRkp3anZVZDJ2OE5LUGhyRFRmNVE2OVhYTjBBWDVacmJWVU1hZENiTzN6R2k3S0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IkNCV3p3N3FYQmFRTVVzTTlLUDdYNlV1elAvVEE0cXM3K1BxZTN6MHlsME09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik4xWGRGZ0ZYVHAyTG9OamtfRTIyZXciLCJwaG9uZUlkIjoiMjFmNTRjYTktMzc2ZS00Mjc2LTgxY2UtZjFlMDdjODZkYTZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx5ajB1MGJwdkxrK1ozbzlsakM2VFQ4WHJ3ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQmI0M25qVVB1NkpoS1prZ3BTRnpESVJiMmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjdCTkRaSDIiLCJtZSI6eyJpZCI6IjIzNzY3NDIwMTIzNTozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGAl+GAruGAsCDwnZaR8J2WiiDwnZaR8J2WlPCdlprwnZaI8J2WjfCdlorhgJfhgK7hgLAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0krZmw5UUdFSSt4dWI4R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRKcGNPdVBMTi9ONFNIZjBMUnloN293M1FOY3RMZ09LS0x2eHdEaitCbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVGWjFpQU01WkhJMmJQUUNLUTgyOHIwZlUxN2ZiaEpqUU5IN2dFVHcyb24rdHNqRjVvb3NtRGtHSU9ZKzBJZXZBdUNZaFJqWllTaEtLYWNVWlBxSkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5MXFhd3NhQlpZUEMybWNrbGo0bTFaR3c1M3ZONmIwdXV3OWR0OWlmYmlvR1VlMkJQT3FKc3hqbG5NUUUrbzNYSkhNWFM3aEFabkJpOHUxUkM4NkhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3NDIwMTIzNTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJTYVhEcmp5emZ6ZUVoMzlDMGNvZTZNTjBEWExTNERpaWk3OGNBNC9nWnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDM2NzM1MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3NwIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 𝗹𝗲༒𝗹𝗼𝘂𝗰𝗵𝗲🌹⃟⃢👑",
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
