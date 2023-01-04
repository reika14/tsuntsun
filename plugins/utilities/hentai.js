exports.run = {
   usage: ['hentai'],
   use: 'nsfw',
   category: 'utilities',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
        const rows = [{
   title: 'Waifu NSFW',
   rowId: '.waifus',
   description: ``
}, {
   title: 'Neko NSFW',
   rowId: '.nekos',
   description: ``
}, {
    title: 'Trap NSFW',
    rowId: '.trap',
    description: ''
}, { 
    title: 'Nyepong NSFW',
    rowId: '.sepong',
    description: ''
}]
client.sendList(m.chat, 'Cari Anime Hentai NSFW', `*PASTIKAN KAMU BERUMUR 17+ UNTUK MEMAKAI FITUR INI KARNA ADA AKTIVITAS SEKSUAL!*\n\n\nSilahkan pilih sesuai yang kamu inginkan di button bawah untuk berinteraksi!`, '© reika-bot', 'List Hentai', [{
   rows
}], m) } catch (e) {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   private: true,
   limit: false,
   restrict: true
}