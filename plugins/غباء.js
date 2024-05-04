let handler = async (m, { conn, command, text }) => {
let stupidity = `*┃❐━═━═✦◈❨🫏❩◈✦═━═━❐┃*

*⏎┇نسبة غـبـائـك ${text} هي ${Math.floor(Math.random() * 100)}%┇☞*
*⏎┇خـت امـتـيـاز الاول مـره ف حـيـاتـك┇➥*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['fun']
handler.command = /^(غباء)$/i
export default handler
