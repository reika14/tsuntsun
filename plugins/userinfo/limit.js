exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      if (user.limit < 1) return client.reply(m.chat, `🌿 Penggunaan bot sudah mencapai batas limitnya dan akan direset jam 00.00\n\nUntuk mendapatkan banyak limit, upgrade ke premium dengan mengirim *${isPrefix}premium* !`, m)
      client.reply(m.chat, `🌿 limit mu tersisa: [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nUntuk dapat banyak limit, upgrade ke premium dengan kirim *${isPrefix}premium* !` : ''}`, m)
   }, 
   error: false
}