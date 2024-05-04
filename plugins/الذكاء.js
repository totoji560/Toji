let handler = async (m, { conn, command, text }) => {
let intelligence = `*┃❐━═━═✦◈❨💡❩◈✦═━═━❐┃*

*⏎┇نسبة ذكائــك ${text} هي ${Math.floor(Math.random() * 100)}%┇☞*
*⏎┇دي درجـــة حـــرارة ربـنـا يـشـفـيـك┇➥*
`.trim()
m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']
handler.tags = ['fun']
handler.command = /^(ذكاء)$/i
export default handler

