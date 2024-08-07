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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_29_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaW9DczdnK0QyR3A1djBIN0x5WWZGYU03WjExZEY1VjhRRXdlMSszWGxhTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidkZLTHlGdDFSb2VpVHduOGU0ZjFEUVwiLFxuICBcInBob25lSWRcIjogXCJkOWM5MmIyYS1jYWJkLTQ1MWYtYTdkNC05MjQxM2JlM2MwMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxODAsXG4gICAgICAxNyxcbiAgICAgIDIwOCxcbiAgICAgIDg1LFxuICAgICAgMTEsXG4gICAgICAxNzcsXG4gICAgICAxNzYsXG4gICAgICA2OSxcbiAgICAgIDYwLFxuICAgICAgMjI2LFxuICAgICAgNSxcbiAgICAgIDIyNixcbiAgICAgIDYxLFxuICAgICAgMjE5LFxuICAgICAgODksXG4gICAgICAxOTUsXG4gICAgICAxMzYsXG4gICAgICAyMjMsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTMwLFxuICAgICAgNzQsXG4gICAgICAxODMsXG4gICAgICA2NyxcbiAgICAgIDE4MyxcbiAgICAgIDI0NixcbiAgICAgIDUzLFxuICAgICAgMjUwLFxuICAgICAgNzAsXG4gICAgICAxOTgsXG4gICAgICAxNTIsXG4gICAgICAxLFxuICAgICAgMTU4LFxuICAgICAgMzMsXG4gICAgICAxMTgsXG4gICAgICAyMDIsXG4gICAgICAxNzIsXG4gICAgICA2MixcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlFQUE5TVRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDA1MTUxNjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYzOTM0MDcxMzU4MjQ6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdLeUxBRUVQZXl1N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0aUVwbHBCM1cram83LzlNRGJOckg5WkFMOVhsNVJENDFhV1hjOW5yTlRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZaMlpRQVZuQUNNL05MWkEzWStJS1h5ZmpjMTNHNjkwbHYvUWc5VU5EZzl5czNtUU9qSlpEcVM4bjh5YThkU2pkTmxua3lDbjBzaE1jTVJhcGJYY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQ5eU5kdVdncXBmVnI0SVBoYzM3WkY2L1dPVml2OFMrK0gwbGRTR3hCOU9Kd3RzWkFqNVpSampCalFhV2V1QXV5bG1RNjRFNmh5eW10ZUEwdjB3cUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0MDUxNTE2OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjczNDk3MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "https://platform.openai.com/account/api-keys",
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
