exports.run = {
   usage: ['neko'],
   use: '',
   category: '',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Func.fetchJson('https://api.waifu.pics/sfw/neko')
         if (!json.url) return client.reply(m.chat, global.status.fail, m)
            client.sendFile(m.chat, json.url, '', `Neko~ \nsupport bot: saweria.co/ArdhiRahma`, m)
            await Func.delay(2000)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   restrict: true
}