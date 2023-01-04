exports.run = {
   usage: ['nekos'],
   use: '',
   category: '',
   async: async (m, {
      client,
      //text,
      isPrefix,
      command
   }) => {
      try {
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Func.fetchJson('https://api.waifu.pics/nsfw/neko')
         if (!json.url) return client.reply(m.chat, global.status.fail, m)
            client.sendFile(m.chat, json.url, '', `Neko Hentai~ \nsupport bot: saweria.co/ArdhiRahma`, m)
            await Func.delay(2000)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   premium: true,
   private: true,
   limit: true,
   restrict: true
}