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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjc1czhzZndBMXhxMkJZUkFhRjdoNnFoR1NVL1VVelNxbTBUbXdiZVY1eWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZ5aE9IeVVpUzVpN3VDeVVVa0RIbmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFjYzdjMzAtNWZlZS00OGNiLTgyNTQtNGFiNzg2NTRmMDdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjAyLFxuICAgICAgMjQ2LFxuICAgICAgMTM3LFxuICAgICAgMjU1LFxuICAgICAgNjAsXG4gICAgICAxMjcsXG4gICAgICAyMzQsXG4gICAgICA0MSxcbiAgICAgIDIyMSxcbiAgICAgIDE2NSxcbiAgICAgIDE3MixcbiAgICAgIDIzNSxcbiAgICAgIDIzMSxcbiAgICAgIDEzMSxcbiAgICAgIDQxLFxuICAgICAgMTY1LFxuICAgICAgMzQsXG4gICAgICA1MyxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDIwMixcbiAgICAgIDkxLFxuICAgICAgMjM5LFxuICAgICAgNjMsXG4gICAgICA5OCxcbiAgICAgIDE1LFxuICAgICAgMTQyLFxuICAgICAgMTk2LFxuICAgICAgMTQ0LFxuICAgICAgNTQsXG4gICAgICAxODQsXG4gICAgICA1OCxcbiAgICAgIDYsXG4gICAgICAxNzQsXG4gICAgICAxNjgsXG4gICAgICAzNixcbiAgICAgIDExNyxcbiAgICAgIDgzLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDlFN1JKU1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzA0MDUxNTE2OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjM5MzQwNzEzNTgyNDo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJemd1dm9FRUxPNWhyVUdHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjYwT013UFVNdTQ0NVNscGRXQ2pVTUFMSzVBRFhtUGFuRHBWZ1FWNnJBMWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL1piMVZUSC81Sm9aWWxld1ZKcXI0VGw2eVVzeWxoV1d2ZWo1OElqVG1qdVZYckpjN2Uzc1g5bGpVTnlsY083czJLUjFDdTNVRG9yWXppUk9Bc05SQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiekhxOUNKbU5DSUVkWUhYTjFJeGN2OFBSUGhjVDB5bU9xMlpFUzFPU0xabURPNmcySjl4T2tYeXNsbHEybVNqZkhyWWp6eUFlcWlpaGlUNTF0UllpQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDQwNTE1MTY6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODY3NDQ2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , ///"𝐏𝐎𝐖𝐄𝐑 𝐁𝐘 𝐂𝐏 ⛓💨", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CP",
  packname: process.env.PACK_NAME || "𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 𝗖𝗣 ♥️⛓💨",
  botname : process.env.BOT_NAME  || "CP WA-MD",
  ownername:process.env.OWNER_NAME|| "𝗖𝗛𝗔𝗧𝗛𝗨𝗥𝗔[𝗖𝗣]",


  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "CHATHURA"  ).toUpperCase(),



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
