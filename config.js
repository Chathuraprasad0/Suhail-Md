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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_56_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNixcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkt6T2JBYnVBbytPdnBjVTRZUFRwbEFLcGU1b3VUT3VpcXZZQzUxekhQVkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNJYmthajIzUmVhWjBONkVsc05fM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGM2MTZlZmUtYmQ4Yy00NjM0LTkwNzYtYjg4MDJkMzg1ZWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTE0LFxuICAgICAgMjE4LFxuICAgICAgMTkxLFxuICAgICAgMTgyLFxuICAgICAgNDAsXG4gICAgICAxNyxcbiAgICAgIDIyNSxcbiAgICAgIDEzMSxcbiAgICAgIDU0LFxuICAgICAgNixcbiAgICAgIDU3LFxuICAgICAgMTM2LFxuICAgICAgMTUzLFxuICAgICAgMTM0LFxuICAgICAgMTc3LFxuICAgICAgMTg2LFxuICAgICAgNzYsXG4gICAgICAyNSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDUzLFxuICAgICAgMTIyLFxuICAgICAgMTA5LFxuICAgICAgMzQsXG4gICAgICAyMTksXG4gICAgICA5MyxcbiAgICAgIDIwMSxcbiAgICAgIDYzLFxuICAgICAgNTEsXG4gICAgICAzMyxcbiAgICAgIDIsXG4gICAgICAyNDEsXG4gICAgICAyMjIsXG4gICAgICAxOTAsXG4gICAgICAxMzMsXG4gICAgICAxNixcbiAgICAgIDIyNSxcbiAgICAgIDUyLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhKMTFQUUFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDA1MTUxNjo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYzOTM0MDcxMzU4MjQ6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NLeUxBRUVPNmJtYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0aUVwbHBCM1cram83LzlNRGJOckg5WkFMOVhsNVJENDFhV1hjOW5yTlRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNYQ1c0Z2NuVHFkaU1pLzgveThlNU5IcnM2TnVXZkVicmVIZFRMSllHOVNRRHA5UVVHWTVwVGlDWkRBV0FCbnBlaW9KNDYwSlFvaDBhTDJDRUFjMUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkd0M0IrWnBoYndOWnQ2SWUwUmxPU2ptcVhQRjE4U2UyTklSMlFXTElyQkNvdDcvS1kzYTUvWFRHem1WZklXTWdYbDdiN1IwUnZGaU1TdkVXMU5zekFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0MDUxNTE2OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE3NDk2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
