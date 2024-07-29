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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieG0xcVpMdWQ3dHRraGIzcW02MzhxYUlHVzdjYjNkcElIaC9EejNWQkhYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0lTZGtsWU5UZXlLOE1iNWh0RGluQVwiLFxuICBcInBob25lSWRcIjogXCI3NGE0NmRkYi03ZmY1LTQ4ODAtYjY0OS1jM2U1NWI1NTY2NGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTIwLFxuICAgICAgNTgsXG4gICAgICAxNjcsXG4gICAgICAyMSxcbiAgICAgIDE1MSxcbiAgICAgIDEzNSxcbiAgICAgIDI1MSxcbiAgICAgIDY1LFxuICAgICAgMTA2LFxuICAgICAgMjM1LFxuICAgICAgOTEsXG4gICAgICAxMzksXG4gICAgICAyNTEsXG4gICAgICA1NyxcbiAgICAgIDUxLFxuICAgICAgMTQsXG4gICAgICAxMzksXG4gICAgICAyMzgsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxNzQsXG4gICAgICAxNTQsXG4gICAgICA2LFxuICAgICAgMjAwLFxuICAgICAgMTkxLFxuICAgICAgMTUsXG4gICAgICA0NCxcbiAgICAgIDExNixcbiAgICAgIDY5LFxuICAgICAgMTAyLFxuICAgICAgNTcsXG4gICAgICA4NixcbiAgICAgIDE3OSxcbiAgICAgIDExNyxcbiAgICAgIDEwMyxcbiAgICAgIDEyMyxcbiAgICAgIDg0LFxuICAgICAgMTgwLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkszSFZYNTNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDA1MTUxNjo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYzOTM0MDcxMzU4MjQ6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FLeUxBRUVPN2JuYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0aUVwbHBCM1cram83LzlNRGJOckg5WkFMOVhsNVJENDFhV1hjOW5yTlRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZxT1B0cUF4SWExV2NGM05obXY1MERWeUFiSG9LbGNDYnl6NnNnQkdQMHBUK1UwYXJDVFZkVmRZSWsrWnpaRk1jdXRzd3hXY3RCSVRhRHRsbENJOUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRhZnhOM3BrbnBpSHNpaDRaVUMzUlBLV2dydWcwb1F4L1Y5SWFMSlRGMU5wcGZjY2ZwTm4rWHZQZm1HWnFYVWFFMWtlS0dLVExoNnlhM0E0YzJMVUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0MDUxNTE2OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI0ODY5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
