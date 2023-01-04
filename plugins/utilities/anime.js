exports.run = {
   usage: ['anime'],
   hidden: ['wibu'],
   use: '',
   category: 'utilities',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
        const rows = [{
   title: 'Waifu',
   rowId: '.waifu',
   description: `Cari Waifu Acak`
}, {
   title: 'Neko Kucing',
   rowId: '.neko',
   description: `Furry Indonesia?`
}, {
    title: 'Shinobu',
    rowId: '.shinobu',
    description: 'Cari Waifu Shinobu~'
}, { 
    title: 'Megumin',
    rowId: '.megumin',
    description: 'Cari Waifu Megumin~'
}]
client.sendList(m.chat, 'Cari Gambar Anime!', `Silahkan pilih sesuai yang kamu inginkan di button bawah untuk berinteraksi!`, '© reika-bot', 'ihhh abang jahat! aku tuh...', [{
   rows
}], m) } catch (e) {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: false,
   restrict: true
}