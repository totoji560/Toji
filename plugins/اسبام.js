import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    await conn.sendMessage(m.chat, { react: { text: '✔️', key: m.key } })
let videoUrl = 'https://telegra.ph/file/f943702dde58de785561b.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
हैलो, WhatsApp समर्थन टीम। मेरी संख्या को एक हैकर द्वारा अवरुद्ध किया गया था जिन्होंने अपनी नीति और उल्लंघन की गोपनीयता का विरोध करने वाली चीजों को भेजा था। मैंने इसका उल्लंघन नहीं किया और मैं गलती नहीं थी। इस मामले में, उन्होंने क्या संशोधित संस्करण कहा जाता है, और हम एक बड़े और प्रसिद्ध व्यापारी हैं। भले ही मेरे खाते पर प्रतिबंध नहीं उठाया गया था, मैं आपके उपचार से संतुष्ट नहीं होगा। जब मेरी संख्या अवरुद्ध हो गई थी, तब मैं अपने परिवार और दोस्तों से बात कर रहा था, लेकिन मैं इसे व्हाट्सएप का उपयोग करके बहुत अच्छी तरह जानते थे। यह कई साल रहा है और मेरा खाता पहले कभी अवरुद्ध नहीं हुआ है, और अब व्हाट्सएप एजेंटों द्वारा त्रुटि हुई है। हालांकि, इन अपराधियों ने कष्टप्रद संदेश लिखे, और इस अपराधी ने संशोधित व्हाट्सएप का इस्तेमाल किया, और ज़ार ने विपरीत संदेशों को सक्रिय किया और एक कष्टप्रद संदेश भेजा, और इस व्यक्ति ने इस कष्टप्रद संदेश की सूचना दी, और मेरी संख्या को किसी कारण से अवरुद्ध नहीं किया गया, और यह त्रुटि आपकी खराब सेवा से आई। इस समस्या का समाधान तुरंत पाया जाना चाहिए। मुझे आशा है कि मेरे खाते पर प्रतिबंध उठाया जाएगा और मेरी संख्या है+20
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اسبام'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }





