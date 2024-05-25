let handler = async (m, { conn, isROwner }) => {
    if (!isROwner) return // او يمكنك استخدام dfail() لرسالة الخطأ
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ تم تعطيل البوت في هذه المجموعة')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'بان_شات']

handler.group = true
handler.owner = true

export default handler
