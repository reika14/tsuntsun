// Owner number
global.owner = '6281998903280'
// Owner name
global.owner_name = 'kyura'
// Database name (Default: database)
global.database = 'database'
// Maximum upload file size limit (Default : 100 MB)
global.max_upload = 100
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 25)
global.limit = 20
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '94', '94', '212']
// Put target jid to forward friends story
global.forwards = global.owner + '@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot version
global.version = '2.2.2',
// Bot name
global.botname = `Reika-Bot-WhatsApp`
// Footer text
global.footer = 'This bot powered by Kyura'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Proses!'),
   invalid: Func.texted('bold', 'URL keliatan nya salah!'),
   wrong: Func.texted('bold', 'Format nya Salah!'),
   getdata: Func.texted('bold', 'Mencari Metadata...'),
   fail: Func.texted('bold', 'Metadata nya tidak didapat!'),
   error: Func.texted('bold', 'Error, coba lagi nanti!'),
   errorF: Func.texted('bold', 'Maaf, Fitur ini lagi Error!'),
   premium: Func.texted('bold', 'gabisa bro, soalnya kamu ngga premium!\nbeli premium ketik .premium'),
   owner: Func.texted('bold', 'gabisa slayyy, soalnya kamu bukan owner!'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'Gabisa slayyyy, fitur ini cuma bisa digrup'),
   botAdmin: Func.texted('bold', 'Jadiin bot admin dulu, biar bisa dipake'),
   admin: Func.texted('bold', 'Gabisa slayyyyyy, hanya admin yang bisa pake fitur ini'),
   private: Func.texted('bold', 'slayyy, pake fitur ini di chat pribadi bot')
})