let handler = async (m, { conn, command, text }) => {
let love = `
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*❖┃اختر الاستماره حسب نقابتك*
*❂ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*
*❐┃الاستمارات الموجودة حاليا ⇓*
*──────────────*
*❐↞┇استمارهmoon*
*❐↞┇استمارهmagic*
*──────────────*
*❐┃ملحوظة*

*╟❧ قبل استخدام الأمر اكتب ↞ .*
*╟❧ عند استخدام الأمر لا تضع مسافه*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(استماره)$/i
export default handler
