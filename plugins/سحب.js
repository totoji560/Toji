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
    await conn.sendMessage(m.chat, { react: { text: '⚔️', key: m.key } })
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
##WhatsApp_support##
مرحبا عميلنا العزيز، لقد رصد نظامنا من استخدامات غير سليمه لحسابك في واتساب ونحن نظن انك عبارة عن بوت واتساب للمخترقين ولقد تعرض للكثير من الإبلاغات نرجو منك عند رؤيه هذه الرساله الرد بي (WhatsApp_support) ليتم تحويلك إلي المرحلة التاليه، في حال انك لم ترد علي هذه الرساله خلال اربع ساعات سيتم حظر حسابك من استخدام واتساب، تحيات فريق دعم واتساب
##WhatsApp_support##
ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
الكود التاني
##WhatsApp_support##
شكرًا على رسالتك. رقم تذكرتك هو 308711568937910. سنراجع مشكلتك ونرد عليك في أقرب وقت ممكن.  
  
فيما يلي ما كتبته:  
  WhatsApp_support
##WhatsApp_support##
ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
التالت
##WhatsApp_support##
مرحبا، شكرا لتواصلكم مع فريق دعم واتساب. سوف نرسل إليك رمز مكون من ستة أرقام نرجو منكم ارساله إلينا في اسرع وقت، في حاله إن لم يتم إرسال الرمز في غضون اربع ساعات سيتم حظر حسابك من إستخدام واتساب، مع تحيات فريق دعم واتساب. 
##WhatsApp_support##
ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
الرابع
##WhatsApp_support##
شكرًا على رسالتك. رقم تذكرتك هو 586435468466858. سنراجع مشكلتك ونرد عليك في أقرب وقت ممكن.  
  
فيما يلي ما كتبته: 

  ##WhatsApp_support##
ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
الخامس
##WhatsApp_support##
مرحبا، نشكركم للتواصل معنا ولتعاونكم معنا في ارسال الرمز المكون من ستة ارقام، مع تحيات فريق دعم الواتساب. 
##WhatsApp_support##
ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['سحب'] 

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





