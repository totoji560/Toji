const handler = async (m, { conn, usedPrefix, command }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  
  try {
    const response = await fetch(`./language/${idioma}.json`);
    const _translate = await response.json();
    const tradutor = _translate.plugins.gc_delete;

    if (!m.quoted) throw tradutor.texto1;
    try {
      const delet = m.message.extendedTextMessage.contextInfo.participant;
      const bang = m.message.extendedTextMessage.contextInfo.stanzaId;
      return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
    } catch {
      return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
    }
  } catch (error) {
    console.error(error);
    return conn.sendMessage(m.chat, 'حدث خطأ أثناء قراءة ملف الترجمة.');
  }
};
handler.help = ['del', 'delete'];
handler.tags = ['group'];
handler.command = /^حذف$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
