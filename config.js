const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; "https://telegra.ph/file/4317dedc27d479546a3b0.jpg"
global.caption = process.env.CAPTION || global.caption || "𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 𝗖𝗣 ⛓💨" 


global.devs = "94704051516" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94704051516";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94704051516";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_13_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdUM3ZDNHMzTmhsTlZFZ1ZKTHF6VndCN1MrRVMvOThuV1FyNUZPSnhTdG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc3c1dRaThsU2dLbmRzQ05aemIyc2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWMzOGQ5YmQtMGRmMy00Y2YyLThkZGQtY2Q4OTM2NzI3MDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDg1LFxuICAgICAgMjU0LFxuICAgICAgMixcbiAgICAgIDYwLFxuICAgICAgMTI2LFxuICAgICAgMTY3LFxuICAgICAgMjQ2LFxuICAgICAgMjE5LFxuICAgICAgMjAxLFxuICAgICAgMTg4LFxuICAgICAgMTY5LFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICA1MSxcbiAgICAgIDE0OSxcbiAgICAgIDcyLFxuICAgICAgMTQ3LFxuICAgICAgMjMwLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAzNixcbiAgICAgIDQ2LFxuICAgICAgMTQ4LFxuICAgICAgMjEwLFxuICAgICAgNzgsXG4gICAgICAxNzQsXG4gICAgICAxMjMsXG4gICAgICAyMjQsXG4gICAgICAxMDAsXG4gICAgICA1MCxcbiAgICAgIDExMixcbiAgICAgIDE2NixcbiAgICAgIDI3LFxuICAgICAgMTA3LFxuICAgICAgNDIsXG4gICAgICAxMDEsXG4gICAgICAxMDMsXG4gICAgICAyMTYsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVZUN1dLRDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzA0MDUxNTE2OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjM5MzQwNzEzNTgyNDo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZUt5TEFFRUwyY3FMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRpRXBscEIzVytqbzcvOU1EYk5ySDlaQUw5WGw1UkQ0MWFXWGM5bnJOVGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiak9US2xUdzJvb1ZMMXl2ZFVhay9SeFRzRU9rb3BvZHBBZ0RPeEt5M1Y2QXlyQnROL0Q1UDYwQ2FMT0ZzOVBVRTVzazBlUGhIQ1BWZERlRU1YaDU3QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNThuOVMvRUlNOTI3aDJsUWJHL2M4USsrMFlKejM5dzNqSzBGdEJDLzhCYUZkNlc1MDkyckRlWit4cXlLSVgvOCtxVzU5MGU5RGlTSFg1azZaK000aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDQwNTE1MTY6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDIwODAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , ///"𝐏𝐎𝐖𝐄𝐑 𝐁𝐘 𝐂𝐏 ⛓💨", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CP",
  packname: process.env.PACK_NAME || "𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 𝗖𝗣 ♥️⛓💨",
  botname : process.env.BOT_NAME  || "𝗖𝗣-𝗪𝗔-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗖𝗛𝗔𝗧𝗛𝗨𝗥𝗔[𝗖𝗣]",


  errorChat : process.env.ERROR_CHAT || "true",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝙲𝙷𝙰𝚃𝙷𝚄𝚁𝙰"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
