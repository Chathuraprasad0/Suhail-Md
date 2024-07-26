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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_44_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzempRMUozUGd0Ujh1dmxTTVdmNGtDdmhQSS83WExjZlNadlp4Wk5BTkJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXT1UwdkFHM1M0eTVEU1dyVFdQb1F3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0NjY4NWI0LWQ2YWQtNDM2ZS04M2EyLTE1YmQwZjU2Y2JkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMzMsXG4gICAgICAyMjEsXG4gICAgICAxODYsXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgNzYsXG4gICAgICAxNDcsXG4gICAgICAyNTAsXG4gICAgICAxNDAsXG4gICAgICA0MixcbiAgICAgIDQsXG4gICAgICAxMDgsXG4gICAgICAxNzMsXG4gICAgICA4NCxcbiAgICAgIDExNyxcbiAgICAgIDE3NSxcbiAgICAgIDE1NixcbiAgICAgIDE0NixcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAyLFxuICAgICAgMjEsXG4gICAgICAyNTQsXG4gICAgICAyMTIsXG4gICAgICAxNjgsXG4gICAgICAxMjksXG4gICAgICAxMTQsXG4gICAgICA5NCxcbiAgICAgIDI4LFxuICAgICAgMTU5LFxuICAgICAgMjM5LFxuICAgICAgMTUyLFxuICAgICAgMjQ1LFxuICAgICAgMTA0LFxuICAgICAgMTkyLFxuICAgICAgMTU4LFxuICAgICAgMTA2LFxuICAgICAgMTcyLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhTRFJLNVI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDA1MTUxNjo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYzOTM0MDcxMzU4MjQ6NTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpndXZvRUVJQ2VpclVHR0JrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2ME9Nd1BVTXU0NDVTbHBkV0NqVU1BTEs1QURYbVBhbkRwVmdRVjZyQTFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQ2RzdKM2E0U1BLSVh4VnNoQ0FnZzMvS0pESTNSQ3h0NUVTajhxakljQmMxeEF5QjhVQnRVZHpKQi9ZcSsvanNvYXY2MGZnV2JqRzhOTUZGakxOOUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhrMmZ5WHNuakJucXRUd080VGhaVnc3YzNkaGlsNGNHdmZDdW9oblV3RnpxbVp1dkIyUDU3cjBDV0xPZVJmTFZhODJMbWxqbjZmcWlWWDR4enIyMmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0MDUxNTE2OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkyOTQ3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
