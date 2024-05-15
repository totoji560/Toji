let handler = async (m, { conn, isOwner }) => {
    if (!isOwner) return // يمكنك استخدام dfail() لرسالة الخطأ هنا
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ البوت نشط في هذه المجموعة')
}

handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['unbanchat', 'شات']

export default handler
