const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_44_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJua05HbjhSM0Q2L1p4MTR5UWZ0N0VVUktlTHA3Z2g2NW0zTGxCclpvK1VjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIcDBzcGRjRlNULVFaOEhIQ3pfMDNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwYzhjNzk3LTFjM2QtNGMwMi1iMWFjLTg0N2ZhODA2YWRkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxNTQsXG4gICAgICAxOTcsXG4gICAgICAxMSxcbiAgICAgIDE2NSxcbiAgICAgIDIwNCxcbiAgICAgIDIwMSxcbiAgICAgIDIwOSxcbiAgICAgIDEwNCxcbiAgICAgIDIyNyxcbiAgICAgIDEzNSxcbiAgICAgIDI5LFxuICAgICAgNzEsXG4gICAgICAzOSxcbiAgICAgIDE3NyxcbiAgICAgIDE0MCxcbiAgICAgIDE4MSxcbiAgICAgIDEwMCxcbiAgICAgIDc4LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyNSxcbiAgICAgIDE0MCxcbiAgICAgIDExOCxcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDIxMixcbiAgICAgIDEyMyxcbiAgICAgIDg3LFxuICAgICAgMjI1LFxuICAgICAgMjQ4LFxuICAgICAgMTE1LFxuICAgICAgMjUzLFxuICAgICAgMjA3LFxuICAgICAgMjUwLFxuICAgICAgNDEsXG4gICAgICAyNTUsXG4gICAgICAxMzYsXG4gICAgICAxMyxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWlpCSFZWOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDQwNTE1MTY6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU2MzkzNDA3MTM1ODI0OjQ5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6Z3V2b0VFTHJML3JRR0dCTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNjBPTXdQVU11NDQ1U2xwZFdDalVNQUxLNUFEWG1QYW5EcFZnUVY2ckExZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWbWxOb3FnQjRWNWJOOW15d0xOYUZKTGthNUdRUTFidWNlN00wVXljUDJaMis3QVpsajZUT3RuRVJrZWErL1MzcHY1UmU0aXRSd1hUWjBXdTRyaG9CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSTVZyem5tcnA2Uy9GWm9Ua21LN05zTitKUFpQcHZpS0ptS1l4QndCMTVrcnN4QXlkM2hIRGFBYlZQMDZETENKN1ltcDVjWTFVWE1sUlhGeTMyZmNoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwNDA1MTUxNjo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3Mzg2ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1kRC5qc29uIjogIntcImtleURhdGFcIjpcIkpoN1FiUFkyS0hhU3gwajFVS0dLeXQyYTlkRDZCNEcvbnJtbDZ4Rlk4b2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzMDU1Njk0MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDYwMDUyMzI2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 𝗖𝗣 ♥️⛓💨",
  botname : process.env.BOT_NAME  || "CP-MD",
  ownername:process.env.OWNER_NAME|| "𝗖𝗛𝗔𝗧𝗛𝗨𝗥𝗔[𝗖𝗣]",


  errorChat : process.env.ERROR_CHAT || "true",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
