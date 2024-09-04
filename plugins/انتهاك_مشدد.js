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
    await conn.sendMessage(m.chat, { react: { text: '🎃', key: m.key } })
let videoUrl = 'https://telegra.ph/file/73c08d949aef488d2d4c8.mp4';
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
كود رفع حظر انتهاك مشدد
¶¶الموضوع ¶¶
Mon compte a été banni par erreur et j'aimerais reprendre le bannissement au plus vite. Le compte d'un employé a été bloqué chez 𝐔𝐍.
¶¶الكود¶¶
Bonjour android@support.whatsapp.com,
 mon compte a été banni en ligne. Je n'ai pas violé les conditions d'utilisation de android@support.whatsapp.com. Je suis l'un des plus anciens utilisateurs de WhatsApp. J'utilise WhatsApp depuis 2009. Je n'ai pas violé mes conditions d'emploi. Je réside en Allemagne lorsque j'ai entré mon numéro. Soudain, j'ai été bloqué et on m'a dit que j'avais violé mes conditions d'emploi. Je vis en Allemagne et je travaille pour l'Union européenne et l'UNICEF en tant qu'employé. et mon numéro est lié à mon travail. Je vais perdre mon emploi et perdre de l'argent estimé à 7 000 dollars américains. Veuillez débloquer mon numéro et accélérer le processus. moi dans mon travail et je vais perdre mon emploi à l'UNICEF. J'ai la confiance des USA et j'écris à mon manager avec ce numéro et j'utilise mon numéro (+ Il a été bloqué dès que possible). que possible et reprendre mon travail avec l'ONU. Mon numéro est abonné à des organisations de défense des droits de l'homme. Il existe un groupe de vandales qui rapportent de faux rapports qui n'ont aucune vérité au point qu'ils ont fait perdre à un employé de l'ONU son numéro lié à son travail. Merci à android@support.whatsapp.com de reprendre l'interdiction de mon numéro (+). Un merci spécial à android@support.whatsapp.com.
L'équipe WhatsApp s'excuse pour la gêne occasionnée.
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['انتهاك_مشدد'] 

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





