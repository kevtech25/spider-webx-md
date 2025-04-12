/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RUblIwd0hvbjFBUHBteDB4TVV2aWxhOWNROFJOL2xHdGdQdGV2eHMwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDVNSCtLUHdRWVZOUGFWdm9leVNqOGFUM2RYTS8wNXMrUDNtYTZpV1RqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQWtpZ1pwTFhTbnRUbnlld2tpSy9iUkFNaDJhQng4eDhXb3k0RW1nRlZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRHhWUXA1UmptZnh5cXRCbXV2aGJzSmo3ZEtmTEQ3N0RnMjlLWnlma0E4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEemFCd2hJS0tGeGZGckwzc1VOY2RNenhOSlVaVTAyV01VTTlQQytUblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw0MUhxd1drNXFyY2NHREtLZlNvcXM4djJ1NjZtMGlGdkJxVVBsT1pQQ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Q4UDQvVHIvK1JKUnVmUCtXWUhMWEtGbHVwVGZYbEw2bHlQZGxiL3EwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVluMCtBNFF6M01RY0lUWTNGRVVaUEhUTGl5ZGhxMThLZW9hR0o3UTBVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81TnZxQy9KanN0V1plc2o5WWRkTjlmeFpma0RoWEVwdTVXeXFwZk9OQUxaTkwxRVU4REJ6MFJUS3F0WCtUQUJtT1I3eUxJU1BMelVaMUMwUmg1akF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJ1dmxVWmtMN0taYUNmM0UwQU9VQ2FjNlk3THUxUUNFaUcvektkOWRkOGgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczOTE2NTU2MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NEJCMjFENzgyQzQzMjFDQ0UxMUNBNTFDRDdEMTZCRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NDY2NDY4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MzkxNjU1NjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjRBQkYxMUU4OEM2MDI4NkVBMTBGMjYxQkI3ODgwQ0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDQ2NjQ3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzM5MTY1NTYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE3RjNGRjhBQTI2QTE3RjY5RTE3MjA3NTM4NUQ2QzBBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQ0NjY1MDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczOTE2NTU2MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQzYwMjA0RTQ3Mjc3QzdGQTI1MURBQTA5QTk4ODIyRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NDY2NTEzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3ZmRPOG5VdlJxbUkzVDBfa2dYdjdnIiwicGhvbmVJZCI6IjFjMWMxMDViLWQzMDktNDUwMS1hZDBlLTdlOTlhMWFhNGM4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ZHJyNlpad3JLbHpaNktCaHh0cHZNaDBGZEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidElRS3NGSDBaZXY3cFYxRVcvK2I0d1kxU1c0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhMODRQU002IiwibWUiOnsiaWQiOiIyNTQ3MzkxNjU1NjI6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi7LyI67mIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYis3SlVDRUpQazZiOEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVd29BZk11dFZReVo0bzc2cytrQVFKZWYzcUFvaXdmTVdlZUxhcUNrUHg0PSIsImFjY291bnRTaWduYXR1cmUiOiIzb2YrVlJMMU45N3czWGsyQSs5MFFHNTNsdTRSTGllYUtuTmtCY05YR0RqK3BKUWpiblBQc2dYaDRqUWVXdzZFTXNIa2VnWk9sU0xsR20zcnhYVzFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3pXc3JFM1BmRGExaCtlVDhVaHpsOFN5RGFkenR3WDg0YXZ5Z21QbU5GY0hndnN2eWd4UEpwS096T0d2Qzg0M0RlMUwxZ2pQS1YxZysraVEvYUgyQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MzkxNjU1NjI6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1LQUh6THJWVU1tZUtPK3JQcEFFQ1huOTZnS0lzSHpGbm5pMnFncEQ4ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDQ2NjQ2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMTk4ifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || 'KEVO-BOT';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || 'SPIDER-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || 'KEVO';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254748756653';
const menu = process.env.MENU_TYPE || '';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
