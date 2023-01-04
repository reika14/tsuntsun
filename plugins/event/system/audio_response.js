exports.run = {
   usage: ['acumalaka', 'gay', 'omaga'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         let momo = await Func.fetchBuffer(`https://github.com/reika14/momo/blob/main/media/audio/${command}`)
            client.sendFile(m.chat, momo, '', m, {
                document: false
            })
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   limit: false,
}