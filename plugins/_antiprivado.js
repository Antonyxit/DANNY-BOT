export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝑯𝒐𝒍𝒂 @${m.sender.split`@`[0]}, 𝙣𝙤 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚 𝙚𝙨𝙘𝙧𝙞𝙗𝙞𝙧 𝙖𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙘𝙤𝙢𝙥𝙧𝙖𝙧 𝙪𝙣𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙣ú𝙢𝙚𝙧𝙤 : +52 479 407 0450`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
